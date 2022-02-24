import React from 'react';
import HeaderCarousel from '../components/Homesections/HeaderCarousel';
import Welcome from '../components/Homesections/Welcome';
import Navbar from '../components/Navbar/Navbar';
import Choose from '../components/Homesections/Choose';
import Review from '../components/Homesections/Review';
import Footer from '../components/Footer/Footer';
import Hotels from '../components/Homesections/Hotels';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderCarousel />
      <Hotels />
      <Welcome />
      <Choose />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
