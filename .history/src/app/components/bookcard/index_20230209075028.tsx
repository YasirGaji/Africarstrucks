import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Marginer, Button } from "../../components";
import {
  CardContainer,
  ItemContainer,
  Icon,
  Name,
  LineSeparator,
  DateCalendar,

} from "./styles/bookcard";




export function BookCard() {
  const [startDate, setStartDate] = useState<Date | null>(null);


  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
        <DateCalendar />
      </ItemContainer>

      <LineSeparator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>

      <Marginer margin="2em" direction="horizontal" />

      <Button text="Book A Truck" theme={"filled"}  />
    </CardContainer>
  );
}