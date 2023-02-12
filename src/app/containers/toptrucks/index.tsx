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
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";



export function TopTrucks() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

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

  const Trucks = [
    ( <Truck {...testTruck1} />),
    ( <Truck {...testTruck2} />), 
    ( <Truck {...testTruck1} />), 
    ( <Truck {...testTruck2} />), 
    ( <Truck {...testTruck1} />),  
    ( <Truck {...testTruck2} />)
  ];

  const numberOfDots = isMobile ? Trucks.length : Math.ceil(Trucks.length / 2)


  return (
    <TopTrucksContainer>
      <Title>Explore Our Most Hired Collection</Title>

      <TrucksContainer>
        <Carousel value={current} onChange={setCurrent} slides={Trucks} 

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
            },

            900: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2
                  }
                }
              ]
            }
          }}
          />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </TrucksContainer>
    </TopTrucksContainer>
  )
}