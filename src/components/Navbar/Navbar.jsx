import React from "react";
import styled from "styled-components";

const MainNavbar = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 500;
  font-size: 2rem;
`;
const NavItems = styled.div``;
const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
export default function Navbar() {
  return (
    <MainNavbar>
      <NavContainer>
        <Logo>Lama</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </NavContainer>
    </MainNavbar>
  );
}
