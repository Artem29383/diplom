import React from 'react';
import { gql } from 'apollo-boost';


import * as S from './Main.styled';
import photo1 from '../../assets/sliderPhotos/1.jpg';
import photo2 from '../../assets/sliderPhotos/2.jpg';
import photo3 from '../../assets/sliderPhotos/3.jpg';
import photo4 from '../../assets/sliderPhotos/4.jpg';

import euca from '../../assets/grass1.png';
import cedar from '../../assets/grass2.png';
import telegramMobilePng from '../../assets/telegramBotImage.png';
import Videos from '../../components/Videos';
import Button from '../../components/Button';
import Stories from '../Stories';
import Slider from "../../components/Slider";
import { useQuery } from "@apollo/client";

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
    </S.Root>
  );
};

export default Main;
