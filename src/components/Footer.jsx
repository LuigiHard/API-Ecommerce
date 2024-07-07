import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 Your E-commerce. All Rights Reserved.</p>
    </FooterSection>
  );
};

export default Footer;
