import React from 'react';

// Components
import { Header } from '../components/landing/Header/Header';
import { Items } from '../components/landing/ItemsSection/ItemsSection';
import { AppAdvertisement } from '../components/landing/AppAdvertisement/AppAdvertisement';
import { Footer } from '../components/landing/Footer/Footer';
import { FloatButton } from '../components/landing/FloatButton/FloatButton';

export default () => {
  return (
    <>
      <Header />
      <Items />
      <AppAdvertisement />
      <Footer />
      <FloatButton />
    </>
  );
};
