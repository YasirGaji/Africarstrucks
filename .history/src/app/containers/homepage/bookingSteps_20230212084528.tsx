import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BookingStepsContainer, 
  Step, 
  StepContainer, 
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
        </StepContainer>
      </StepsContainer>
    </BookingStepsContainer>
  );
}