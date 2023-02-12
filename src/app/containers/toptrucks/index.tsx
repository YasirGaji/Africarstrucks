import React from "react";
import { TruckProp } from "../../../typings/truck";
import { Truck } from "../../components";
import { 
  Title,
  TopTrucksContainer,
  TrucksContainer,
} from "./styles/toptrucks";



export function TopTrucks() {

  const testTruck1: TruckProp = {
    name: "Hire Element",
    thumbnailSrc: "/images/truck2.png",
    dailyPrice: 100,
    monthlyPrice: 1000,
    mileage: "10kmpl",
    gearType: "Auto",
    gas: "Petrol",
    model: "",
    make: ""
  }
  
  const testTruck2: TruckProp = {
    name: "Hire",
    thumbnailSrc: "/images/truck2.png",
    dailyPrice: 100,
    monthlyPrice: 1000,
    mileage: "10kmpl",
    gearType: "Manual",
    gas: "Petrol",
    model: "",
    make: ""
  }

  return (
    <TopTrucksContainer>
      <Title>Explore Our Most Hired Collection</Title>

      <TrucksContainer>
        <Truck {...testTruck1} />
        <Truck {...testTruck2} />
      </TrucksContainer>
    </TopTrucksContainer>
  )
}