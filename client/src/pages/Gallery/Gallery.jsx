import React from 'react';
import * as S from "./Gallery.styled";
import Gallery from "../../components/Gallery";

const GalleryPage = () => {
  return (
      <S.StoriesSection>
        <S.TitleStories>Наши Товары</S.TitleStories>
        <Gallery />
      </S.StoriesSection>
  )
};

export default GalleryPage;
