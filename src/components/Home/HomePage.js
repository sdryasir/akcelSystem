import React from 'react';
import TopBar from '../header/contact-topbar/TopBar';
import MainNav from '../header/main-navbar-top/MainNav';
import HomeCarousel from './carousel/HomeCarousel';
import Introduction from './introduction/Introduction';
import Services from './services/Services';
import Projects from './projects/Projects';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <MainNav />
      <HomeCarousel />
      <Introduction />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
