import React, { useState } from "react";
import { TruckProp } from "../../../typings/truck";
import { Truck } from "../../components";
import { 
  Title,
  TopTrucksContainer,
  TrucksContainer,
} from "./styles/toptrucks";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css";



export function TopTrucks() {
  const [current, setCurrent] = useState(0);

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
        <Carousel value={current} onChange={setCurrent} slides={[
           ( <Truck {...testTruck1} />),
           ( <Truck {...testTruck2} />), 
           ( <Truck {...testTruck1} />), 
           ( <Truck {...testTruck2} />), 
           ( <Truck {...testTruck1} />),  
           ( <Truck {...testTruck2} />)
          ]} 

          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            }
          ]}

          breakpoints={{
            649: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1
                  }
                }
              ]
            }
          }}
          />
        <Dots value={current} onChange={setCurrent} number={4} />
      </TrucksContainer>
    </TopTrucksContainer>
  )
}