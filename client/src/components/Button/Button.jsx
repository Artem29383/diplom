import React from 'react';
import * as S from './Button.styled';

const Button = ({
  children,
  fontSize = 13,
  margin = '20px auto 0 0',
  padding = '6px 25px',
}) => {
  return (
    <S.Button padding={padding} margin={margin} fontSize={fontSize}>
      {children}
    </S.Button>
  );
};

export default Button;
