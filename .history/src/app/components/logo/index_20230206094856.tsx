import React from "react";
import { 
  LogoContainer,
  Image
 } from "./styles/logo";

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src="/images/logo.png" alt="Logo" />
      </Image>
    </LogoContainer>
  )
}