import React from "react";
import {
  TopSectionContainer,
  LeftContainer,
  RightContainer,
  Slogan,
  Description,
  BlobContainer,
  StandaloneVehicle
} from "./styles/homepage"

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Find your dream car</Slogan>
      </LeftContainer>

      <RightContainer>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </Description>
      </RightContainer>
    </TopSectionContainer>
  );
}