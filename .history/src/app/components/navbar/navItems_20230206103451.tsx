import React from "react";
import { 
  ListContainer,
  NavItem, 
} from "./styles/navbar"

export function NavItems() {
  return (
    <ListContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      
    </ListContainer>
  )
}