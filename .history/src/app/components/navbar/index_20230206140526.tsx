import React from "react";
import { 
  LogoContainer,
  NavbarContainer
 } from "./styles/navbar";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
        <NavItems />
      </LogoContainer>
    </NavbarContainer>
  );
}