import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffa500;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <NavLink href="#home">Ínicio</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#contact">Contatos</NavLink>
      </NavLinks>
      <Logo src="https://media.tenor.com/SVhwzwr0C3wAAAAe/peter-griffin-basketball.png" alt="Logo" />
    </Nav>
  );
}

export default Navbar;
