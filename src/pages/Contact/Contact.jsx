import React from 'react';
import * as S from './Contact.styled';

import background from './../../assets/contactback.jpeg';

const Contact = () => {
  return <S.Root>
    <S.BackDrop />
    <S.Background url={background} />
  </S.Root>;
};

export default Contact;
