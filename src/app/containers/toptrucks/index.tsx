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
    gearType: "Automatic",
    gas: "Petrol",
    model: "",
    make: ""
  }
  
  const testTruck2: TruckProp = {
    name: "Hire",
    thumbnailSrc: "https://images.unsplash.com/photo-1606780000000-0c0c0c0c0c0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2slMjBjb2xvcmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    dailyPrice: 100,
    monthlyPrice: 1000,
    mileage: "10kmpl",
    gearType: "Automatic",
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