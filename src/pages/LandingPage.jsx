import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Map from '../components/Map';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Map />
      <Footer />
    </>
  );
};

export default LandingPage;
