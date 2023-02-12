import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BookingStepsContainer, 
  Step, 
  StepContainer, 
  StepDescription, 
  StepIcon, 
  StepsContainer,
  StepTitle,
} from "./styles/homepage";

export function BookingSteps() {
  return (
    <BookingStepsContainer>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>

          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Africarstrucks point and book a truck.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>

          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Africarstrucks point and book a truck.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </BookingStepsContainer>
  );
}