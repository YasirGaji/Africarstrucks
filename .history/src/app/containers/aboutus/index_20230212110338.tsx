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
        <Title>We offer the best fleets in Africa. That's a fact.</Title>
      </InfoContainer>
    </AboutUsContainer>
  )
}