import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Stories.styled';

import photo1 from '../../assets/sliderPhotos/1.jpg';
import photo2 from '../../assets/sliderPhotos/2.jpg';
import photo3 from '../../assets/sliderPhotos/3.jpg';
import Button from '../../components/Button';
import { ROUTES } from '../../constants';
import Portal from "../../components/Portal";
import Modal from "../../components/Modal";

const Stories = () => {
  const [show, setShow] = useState(false);

  const handleHide = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true);
  }

  return (
    <>
      <Portal id='modalId'>
        <Modal isShow={show} onHide={handleHide} />
      </Portal>
      <S.StoriesSection>
        <S.TitleStories>Наши Товары</S.TitleStories>
        <S.StoriesSectionContent>
          <S.Card onClick={handleOpen}>
            <S.CardImage src={photo1} />
          </S.Card>
          <S.Card onClick={handleOpen}>
            <S.CardImage src={photo2} />
          </S.Card>
          <S.Card onClick={handleOpen}>
            <S.CardImage src={photo3} />
          </S.Card>
        </S.StoriesSectionContent>
        <Button padding="17px 40px" fontSize={28} margin="0 auto">
          <NavLink to={ROUTES.gallery}>Смотреть всё</NavLink>
        </Button>
      </S.StoriesSection>
    </>
  );
};

export default Stories;
