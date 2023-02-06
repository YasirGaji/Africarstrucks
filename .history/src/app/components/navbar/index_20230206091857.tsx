import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    
  `}
`;



export function Navbar() {
  return (
    <NavbarContainer>
      <h1>Navbar</h1>
    </NavbarContainer>
  );
}