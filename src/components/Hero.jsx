import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: url('/path/to/your/banner.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Welcome to Our E-commerce</h1>
        <p>Discover amazing products and deals.</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
