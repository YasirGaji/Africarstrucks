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
        <Description>
          We value the time and quality. A Truck/Trailer management and sales company. We have a fleet of over 200 trucks. Sales, Repair, Pick-up and Dump Trucks For Hire & Supply…
        </Description>
      </LeftContainer>

      <RightContainer>
        <BlobContainer>
          <img src="/images/blob.svg" alt="blob" />
        </BlobContainer>

        <StandaloneVehicle>
          <img src="/images/truck1.png" alt="Tuck" />
        </StandaloneVehicle>
      </RightContainer>
    </TopSectionContainer>
  );
}