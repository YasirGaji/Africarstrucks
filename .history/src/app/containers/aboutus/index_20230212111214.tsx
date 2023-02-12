import React from "react";
import {
  AboutUsContainer, InfoContainer, InfoText, Title, TruckContainer,
} from "./styles/aboutus";


export function AboutUs() {
  return (
    <AboutUsContainer>
      <TruckContainer>
        <img src="/images/logo1" alt="truck" />
      </TruckContainer>

      <InfoContainer>
        <Title>We offer the best fleets in Africa. That's a fact.</Title>
        <InfoText>
          Not only to provide service, but make you a family, We offer an Automotive-management, Sales, Repair and Dump Truck Hire (Haulage). SAFE & ON TIME CARGO TRANSPORT SERVICES | SAFE ON CONSTRUCTION TRANSPORT SERVICES | SAFE ON MINING TRANSPORT SERVICES | SAFE ON LOGISTICS TRANSPORT SERVICES | SAFE ON FARM TRANSPORT SERVICES | SAFE ON OIL & GAS TRANSPORT SERVICES | SAFE ON MINING TRANSPORT SERVICES | SAFE ON LOGISTICS TRANSPORT SERVICES | SAFE ON FARM TRANSPORT SERVICES | SAFE ON OIL & GAS TRANSPORT SERVICES | SAFE & ON TIME TRANSPORT SERVICES
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}