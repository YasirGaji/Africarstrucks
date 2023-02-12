import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BookingStepsContainer, 
  Step, 
  StepContainer, 
  StepIcon, 
  StepsContainer,
} from "./styles/homepage";

export function BookingSteps() {
  return (
    <BookingStepsContainer>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon  />
            </StepIcon>
          </Step>
        </StepContainer>
      </StepsContainer>
    </BookingStepsContainer>
  );
}