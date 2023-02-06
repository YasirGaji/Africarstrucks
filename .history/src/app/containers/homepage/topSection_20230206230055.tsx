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
          We value the time and quality. A Truck/Trailer management and sales company. We have a fleet of over 200 trucks. Sales, Repair, Pick-up and Dump Truck For Hire & Supply…
        </Description>
      </RightContainer>
    </TopSectionContainer>
  );
}