import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import imageUrl from './../../assets/sliderPhotos/3.jpg';

import * as S from './Modal.styled';
import FadeIn from "../FadeIn";
import useModal from "../../hooks/useModal";

const Modal = ({ isShow, onHide }) => {
  useModal(onHide, isShow);

  return (
    <CSSTransition
      classNames="fadeIn"
      timeout={500}
      in={isShow}
      unmountOnExit
    >
      <S.Root>
        <S.BackDrop onClick={onHide} />
        <S.ContentWrapper>
          <CSSTransition
            unmountOnExit={true}
            appear
            in={isShow}
            timeout={300}
            classNames="fall"
          >
            <S.Content>
              <S.ImageWrapper>
                <CSSTransition
                  unmountOnExit={true}
                  appear
                  in={isShow}
                  timeout={1000}
                  classNames="scale"
                >
                  <S.Image src={imageUrl} />
                </CSSTransition>
              </S.ImageWrapper>
              <S.Form>
                <FadeIn time={300} isFade={isShow}>
                  <S.FormTitle>Title</S.FormTitle>
                </FadeIn>
                <FadeIn time={300} isFade={isShow}>
                  <S.FormDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam
                    culpa ea, laborum natus, nulla praesentium, quasi quisquam quod repellendus soluta veniam? Ex in ipsam
                    labore modi mollitia recusandae.</S.FormDescription>
                </FadeIn>
              </S.Form>
            </S.Content>
          </CSSTransition>
        </S.ContentWrapper>
      </S.Root>
    </CSSTransition>
  );
};

export default Modal;
