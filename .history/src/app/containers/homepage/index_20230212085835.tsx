import React from "react";
import { BookCard, Marginer, Navbar } from "../../components";
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
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="6em" />
      <BookingSteps />
    </PageContainer>
  );
}