import React from "react";
import { 
  LogoContainer,
  NavbarContainer
 } from "./styles/navbar";
import { Logo } from "../logo";

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavbarContainer>
  );
}