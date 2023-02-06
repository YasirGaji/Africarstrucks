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
        <Slogan>We Supply Trucks</Slogan>
      </LeftContainer>

      <RightContainer>
        <Description>
          We value the time and quality. A Truck/Trailer management and sales company.
        </Description>
      </RightContainer>
    </TopSectionContainer>
  );
}