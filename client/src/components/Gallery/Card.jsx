import React from 'react';
import * as S from "./Gallery.styled";

const Card = ({ onSetPhoto, photo }) => {

  const handleSetPhoto = () => {
    onSetPhoto(photo);
  }

  return (
    <S.Card onClick={handleSetPhoto}>
      <S.CardImage src={photo.media_url} />
    </S.Card>
  );
};

export default Card;
