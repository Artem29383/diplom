import React from 'react';
import { any } from 'prop-types';

import * as S from './Layout.styled';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <S.Root>
      <Header />
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.Root>
  );
};

Layout.propTypes = {
  children: any,
};

export default Layout;
