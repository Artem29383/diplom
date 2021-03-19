import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Stories.styled';

import Button from '../../components/Button';
import { ROUTES } from '../../constants';
import Gallery from './../../components/Gallery';

const Stories = () => {
  return (
    <>
      <S.StoriesSection>
        <S.TitleStories>Наши Товары</S.TitleStories>
        <Gallery maxNumber={3} />
        <Button padding="17px 40px" fontSize={28} margin="0 auto">
          <NavLink to={ROUTES.gallery}>Смотреть всё</NavLink>
        </Button>
      </S.StoriesSection>
    </>
  );
};

export default Stories;
