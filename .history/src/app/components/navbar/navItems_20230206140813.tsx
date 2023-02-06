import React from "react";
import { 
  ListContainer,
  NavItem, 
} from "./styles/navbar"

export function NavItems() {
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