import React from "react";
import {
  AboutUsContainer, InfoContainer, Title, TruckContainer,
} from "./styles/aboutus";


export function AboutUs() {
  return (
    <AboutUsContainer>
      <TruckContainer>
        <img src="/images/truck.png" alt="truck" />
      </TruckContainer>

      <InfoContainer>
        <Title></Title>
      </InfoContainer>
    </AboutUsContainer>
  )
}