import React from "react";
import {
  TopSectionContainer,
  LeftContainer,
  RightContainer,
  Slogan,
  Description,
  BlobContainer,
  StandaloneVehicle,
  ButtonContainer,
  Mobilediv
} from "./styles/homepage"
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components";

export function TopSection() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  
  if (isMobile) {
    return (
      <Mobilediv>
      <TopSectionContainer>
        <Slogan>
          We Supply Trucks 
             
        </Slogan>
         

        <RightContainer>
          <BlobContainer>
            <img src="/images/blob.svg" alt="blob" />
          </BlobContainer>

          <StandaloneVehicle>
            <img src="/images/truck1.png" alt="Tuck" />
          </StandaloneVehicle>
        </RightContainer>
    </TopSectionContainer> 

    <div>  
      <ButtonContainer>
        <Button text="Get a truck" theme={"outlined"} />
      </ButtonContainer> 
      </div>     
    </Mobilediv>
    )
  }

  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>We Supply Trucks</Slogan>
        <Description>
          We value the time and quality. A Truck/Trailer management and sales company. We have a fleet of over 200 trucks. Sales, Repair, Pick-up and Dump Trucks For Hire & Supply…
        </Description>

        <ButtonContainer>
          <Button text="Get a truck" theme={"filled"} />
          <Button text="Rent a truck" theme={"outlined"} />
        </ButtonContainer>
        
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