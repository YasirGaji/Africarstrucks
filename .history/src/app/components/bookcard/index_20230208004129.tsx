import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CardContainer,
  ItemContainer,
  Icon,
  Name,
  LineSeparator,

} from "./styles/bookcard";

export function BookCard() {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>

      <LineSeparator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>
    </CardContainer>
  );
}