import React from 'react';
import { gql } from 'apollo-boost';


import * as S from './Main.styled';

import euca from '../../assets/grass1.png';
import cedar from '../../assets/grass2.png';
import telegramMobilePng from '../../assets/telegramBotImage.png';
import Videos from '../../components/Videos';
import Button from '../../components/Button';
import Stories from '../Stories';
import Slider from "../../components/Slider";
import { useQuery } from "@apollo/client";
import Gallery from "../../components/GalleryRecept";

const videoURL =
  'https://aroma-production.s3.eu-west-1.amazonaws.com/uploads/app_settings/a4f8e8f3_8184_415e_aebd_6fc89c85075c_%D7%95%D7%99%D7%93%D7%99%D7%90%D7%95%20%D7%9C%D7%99%D7%95%D7%98%D7%99%D7%95%D7%91%20%D7%A4%D7%90%D7%A8%D7%A7%20%D7%9E%D7%A9%D7%95%D7%9C%D7%91.mp4';

const QUERY_REQ = gql`
    {
        homePages {
            sliderImages {
                id
                url
            }
        }
        recept {
            id
            media_url {
                url
            }
            permalink
            caption
        }
    }
`;

const Main = () => {
  const { loading, error, data } = useQuery(QUERY_REQ);

  if (loading) return <div style={{ height: '100vh' }} />;

  return (
    <S.Root>
      <S.BlockOne>
        <Slider>
          {data.homePages[0].sliderImages.map(image  =>
            <S.Slide key={image.id}>
              <S.WrapperImage>
                <S.Image src={image.url} />
              </S.WrapperImage>
            </S.Slide>)}
        </Slider>
        <S.Videos>
          <Videos videoURL={videoURL} />
        </S.Videos>
      </S.BlockOne>
      <S.BlockTablet>
        <S.Videos>
          <Videos videoURL={videoURL} />
        </S.Videos>
        <Slider>
          {data.homePages[0].sliderImages.map(image  =>
            <S.Slide key={image.id}>
              <S.WrapperImage>
                <S.Image src={image.url} />
              </S.WrapperImage>
            </S.Slide>)}
        </Slider>
      </S.BlockTablet>
      <S.BlockTwo>
        <S.ContentBlock>
          <S.MobileImage>
            <S.MobileImagePng src={telegramMobilePng} />
          </S.MobileImage>
          <S.PreviewBot>
            <S.TextBot>Наш телеграм бот поможет вам на всем пути</S.TextBot>
            <Button>Перейти</Button>
          </S.PreviewBot>
        </S.ContentBlock>
        <S.EucaliptusPng>
          <S.Png src={euca} />
        </S.EucaliptusPng>
        <S.CedarWood>
          <S.Png src={cedar} />
        </S.CedarWood>
      </S.BlockTwo>
      <Stories />
      <S.StoriesSection>
        <S.TitleStories>Всякое о ЗОЖ</S.TitleStories>
        <Gallery maxNumber={data.recept.length} photos={data.recept} />
      </S.StoriesSection>
    </S.Root>
  );
};

export default Main;
