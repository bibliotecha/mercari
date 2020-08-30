import React from 'react';

import { Header } from '../components/Landing/Header/Header';
import { BannerSection } from '../components/Landing/BannerSection';
import { Items } from '../components/Landing/ItemsSection';
import { AppAdvertisement } from '../components/Landing/AppAdvertisement';
import { Footer } from '../components/Landing/Footer';
import { FloatButton } from '../components/Landing/FloatButton';

export default () => {
  return (
    <>
      <Header />
      <BannerSection />
      <Items />
      <AppAdvertisement />
      <Footer />
      <FloatButton />
      <div>test</div>
    </>
  );
};
