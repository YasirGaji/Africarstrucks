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
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar} >Pick Up Date</Name>

       { isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate} /> }
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