import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

const NavbarContainer = styled.div`
  ${tw`
    w-full
  `}
`;



export function Navbar() {
  return (
    <NavbarContainer>
      <h1>Navbar</h1>
    </NavbarContainer>
  );
}