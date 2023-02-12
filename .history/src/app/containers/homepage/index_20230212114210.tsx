import React from "react";
import { BookCard, Marginer, Navbar } from "../../components";
import { AboutUs } from "../aboutus";
import { BookingSteps } from "./bookingSteps";
import { 
  PageContainer 
} from "./styles/homepage";
import { TopSection } from "./topSection";



export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="3em" />
      <BookCard />
      <Marginer direction="vertical" margin="3em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
    </PageContainer>
  );
}