import React, { useCallback, useState } from 'react';
import * as S from './Gallery.styled';
import Card from "./Card";
import useSelector from "../../hooks/useSelector";
import { collectionSelector } from "../../models/users/selectors";
import Modal from "../Modal";
import Portal from "../Portal/Portal";

const Gallery = ({ maxNumber }) => {
  const photos = useSelector(collectionSelector);
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState({
    media_url: '',
    caption: '',
    username: '',
    permalink: ''
  });

  const handleHide = useCallback(() => {
    setShow(false)
  }, [setShow]);

  const handleOpen = useCallback((photo) => {
    setShow(true);
    setPhoto(photo);
  }, [setShow, setPhoto]);

  return (
    <>
      <Portal id='modalId'>
        <Modal isShow={show} onHide={handleHide} data={photo} />
      </Portal>
      <S.StoriesSectionContent>
        {photos.slice(0, maxNumber || photos.length).map(photo => (
          <Card key={photo.id} onSetPhoto={handleOpen} photo={photo} />
        ))}
      </S.StoriesSectionContent>
    </>
  );
};

export default Gallery;
