import React from "react";
import { 
  LogoContainer,
  Image,
  LogoText
 } from "./styles/logo";

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src="/images/logo1.png" alt="Logo" />
      </Image>
      <LogoText>
        
      </LogoText>
    </LogoContainer>
  )
}