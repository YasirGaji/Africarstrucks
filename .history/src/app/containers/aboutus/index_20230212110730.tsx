import React from "react";
import {
  AboutUsContainer, InfoContainer, InfoText, Title, TruckContainer,
} from "./styles/aboutus";


export function AboutUs() {
  return (
    <AboutUsContainer>
      <TruckContainer>
        <img src="/images/truck.png" alt="truck" />
      </TruckContainer>

      <InfoContainer>
        <Title>We offer the best fleets in Africa. That's a fact.</Title>
        <InfoText>
          Not only to provide service, but make you a family, We offer an Automotive-management, Sales, Repair and Dump Truck Hire (Haulage).
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}