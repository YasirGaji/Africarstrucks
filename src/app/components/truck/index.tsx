import { faEllipsis, faFillDrip, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TruckProp } from "../../../typings/truck";
import { SmallIcon } from "../bookcard/styles/bookcard";
import { 
  DailyPrice,
  PricesContainer,
  TruckContainer, 
  TruckName, 
  TruckThumbnail,
  SmallText,
  MonthlyPrice,
  Seperator,
  TruckDetailsContainer,
  TruckDetail,
  TruckInfo,
  RentButton
} from "./styles/truck";


interface TruckProps extends TruckProp  {}

export function Truck(props: TruckProps) {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props;


  return (
    <TruckContainer>
      <TruckThumbnail>
        <img src={thumbnailSrc} alt="Hire Element" />
      </TruckThumbnail>
      
      <TruckName>{name}</TruckName>

      <PricesContainer>
        <DailyPrice>
          {dailyPrice}
          <SmallText>/day</SmallText>
        </DailyPrice>

        <MonthlyPrice>
          {monthlyPrice}
          <SmallText>/month</SmallText>
        </MonthlyPrice>
      </PricesContainer>

      <Seperator />

      <TruckDetailsContainer>
        <TruckDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>

          <TruckInfo>{mileage}</TruckInfo>
        </TruckDetail>

        <TruckDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsis} />
          </SmallIcon>

          <TruckInfo>{gearType}</TruckInfo>
        </TruckDetail>

        <TruckDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>

          <TruckInfo>{gas}</TruckInfo>
        </TruckDetail>
      </TruckDetailsContainer>

      <RentButton text="Hire" />
    </TruckContainer>
  )
}