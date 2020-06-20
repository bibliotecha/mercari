import React from 'react';

// Styles
import '../styles/landing.css';

// Components
import { Header } from '../components/landing/Header';
import { Items } from '../components/landing/Items';
import { AppAdvertisement } from '../components/landing/AppAdvertisement';
import { Footer } from '../components/landing/Footer';
import { FloatButton } from '../components/landing/FloatButton';

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
