import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Header.styled';

import Logo from '../../assets/research.png';
import { ROUTES } from '../../constants';

const Header = () => {
  return (
    <S.Root>
      <S.LogoWrapper>
        <NavLink to={ROUTES.main}>
          <S.Logo src={Logo} />
        </NavLink>
      </S.LogoWrapper>
      <S.Ul>
        <S.Li>
          <NavLink to={ROUTES.main}>Главная страница</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to={ROUTES.gallery}>Галлерея</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to={ROUTES.contact}>Контакты</NavLink>
        </S.Li>
      </S.Ul>
    </S.Root>
  );
};

export default Header;
