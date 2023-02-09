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
  SmallIcon,

} from "./styles/bookcard";




export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if(isStartCalendarOpen) setStartCalendarOpen(false);
  }

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if(isReturnCalendarOpen) setReturnCalendarOpen(false);
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>

        <SmallIcon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </SmallIcon>

        <Name onClick={toggleStartDateCalendar} >Pick Up Date</Name>
       { isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any} /> }

      </ItemContainer>

      <LineSeparator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>

        <Name onClick={toggleReturnDateCalendar} >Return Date</Name>
        { isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate as any} /> }
      </ItemContainer>

      <Marginer margin="2em" direction="horizontal" />

      <Button text="Book A Truck" theme={"filled"}  />
    </CardContainer>
  );
}