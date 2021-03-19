import React, {memo} from 'react';
import * as S from './VisualForm.styled';

const VisualForm = ({
  name,
  handleSubmit,
  submit,
  email,
  message,
  register,
}) => {
  return (
    <S.Root onSubmit={handleSubmit(submit)}>
      <S.Line>
        <S.Label>Имя</S.Label>
        <S.Input
          ref={register}
          name="name"
          type="text"
          isError={name?.message}
          placeholder={name?.message ? name.message : 'Введите своё имя'}
        />
      </S.Line>
      <S.Line>
        <S.Label>E-mail</S.Label>
        <S.Input
          ref={register}
          name="email"
          type="text"
          isError={email?.message}
          placeholder={email?.message ? email.message : 'Введите свой е-mail'}
        />
      </S.Line>
      <S.Line>
        <S.Label>Сообщение</S.Label>
        <S.Area
          ref={register}
          name="message"
          isError={message?.message}
          placeholder={message?.message ? message.message : 'Введите своё сообщение'}
        />
      </S.Line>
      <S.Line>
        <S.Button>Отправить</S.Button>
      </S.Line>
    </S.Root>
  );
};

export default memo(VisualForm);