import React from "react";
import {
  AboutUsContainer, TruckContainer,
} from "./styles/aboutus";


export function AboutUs() {
  return (
    <AboutUsContainer>
      <TruckContainer>
        <img src="/images/truck.png" alt="truck" />
      </TruckContainer>
    </AboutUsContainer>
  )
}