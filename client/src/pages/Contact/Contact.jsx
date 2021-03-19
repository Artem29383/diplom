import React from 'react';
import * as S from './Contact.styled';

import background from './../../assets/contactback.jpeg';
import Form from "./Form";

const Contact = () => {
  return <S.Root>
    <S.BackDrop>
    </S.BackDrop>
    <S.Background url={background} />
    <S.WrapperContactForm>
    <S.ContactForm>
      <S.Title>Контакты</S.Title>
      <S.Description>Если у вас есть какие-либо вопросы,
        свяжитесь с нами.
        Мы с нетерпением ждем вашего сообщения и ответим как можно скорее.</S.Description>
      <Form />
    </S.ContactForm>
    </S.WrapperContactForm>
  </S.Root>;
};

export default Contact;
