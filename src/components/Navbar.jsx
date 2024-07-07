import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`;

const NavLogo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo>My E-commerce</NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
