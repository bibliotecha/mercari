import React from 'react';

// コンポーネント
import { HeaderMobile } from './Mobile/HeaderMobile';
import { HeaderTablet } from './Tablet/HeaderTablet';

export const Header = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderTablet />
    </>
  );
};
