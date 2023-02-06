import React from "react";
import { 
  ListContainer,
  NavItem, 
  mobileMenuStyles
} from "./styles/navbar";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREEENS } from "../responsive";

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREEENS.sm });

  if (isMobile) {
    return (
      <Menu styles={mobileMenuStyles}>
        <ListContainer>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>

          <NavItem>
            <a href="/about">About</a>
          </NavItem>

          <NavItem>
            <a href="/contact">Services</a>
          </NavItem>

          <NavItem>
            <a href="/blog">Our fleet</a>
          </NavItem>

          <NavItem>
            <a href="/blog">Blog</a>
          </NavItem>

          <NavItem>
            <a href="/blog">Contact us</a>
          </NavItem>
        </ListContainer> 
      </Menu>
    )
  }

  return (
    <ListContainer>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>

      <NavItem>
        <a href="/about">About</a>
      </NavItem>

      <NavItem>
        <a href="/contact">Services</a>
      </NavItem>

      <NavItem>
        <a href="/blog">Our fleet</a>
      </NavItem>

      <NavItem>
        <a href="/blog">Blog</a>
      </NavItem>

      <NavItem>
        <a href="/blog">Contact us</a>
      </NavItem>
    </ListContainer>
  )
}