import React, { memo } from 'react';
import { Transition } from 'react-transition-group';
import { any, bool, number } from 'prop-types';

import S from './FadeIn.styled';

const FadeIn = ({ children, time, isFade, unMount }) => (
  <Transition
    unmountOnExit={unMount}
    appear
    in={isFade}
    timeout={time}
    classNames="fade"
  >
    {state => {
      return (
        <S.FadeIn state={state} time={time}>
          {children}
        </S.FadeIn>
      );
    }}
  </Transition>
);

FadeIn.propTypes = {
  time: number,
  children: any,
  isFade: bool,
  unMount: bool,
};

FadeIn.defaultProps = {
  time: 500,
  isFade: false,
  unMount: true,
};

export default memo(FadeIn);
