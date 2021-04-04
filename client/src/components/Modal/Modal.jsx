import React from 'react';
import { CSSTransition } from 'react-transition-group';

import * as S from './Modal.styled';
import FadeIn from "../FadeIn";
import useModal from "../../hooks/useModal";
import { InstagramIcon } from "../../styles/icons";
import instagram from './../../assets/svg/instagram.svg';

const Modal = ({ isShow, onHide, data }) => {
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
                  <S.Image src={data.media_url} />
                </CSSTransition>
              </S.ImageWrapper>
              <S.Form>
                <FadeIn time={300} isFade={isShow}>
                  <S.FormTitle>Описание</S.FormTitle>
                </FadeIn>
                <FadeIn time={300} isFade={isShow}>
                  <S.FormDescription>{data.caption}</S.FormDescription>
                </FadeIn>
                <S.Svg>
                  <a href={data.permalink} target="_blank">
                    <InstagramIcon>
                      <use xlinkHref={`${instagram}#instagram`} />
                    </InstagramIcon>
                    <p>Перейти</p>
                  </a>
                </S.Svg>
              </S.Form>
            </S.Content>
          </CSSTransition>
        </S.ContentWrapper>
      </S.Root>
    </CSSTransition>
  );
};

export default Modal;
