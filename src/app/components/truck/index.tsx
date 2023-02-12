import React from "react";
import { TruckProp } from "../../../typings/truck";
import { 
  TruckContainer,
  
} from "./styles/truck";


interface TruckProps extends TruckProp  {

}

export function Truck(props: TruckProps) {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas, make } = props;


  return (
    <div>
      <h1>Truck</h1>
    </div>
  )
}