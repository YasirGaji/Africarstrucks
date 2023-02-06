import React from "react";
import { Navbar } from "../../components";
import { 
  PageContainer 
} from "./styles/homepage";
import { TopSection } from "./topSection";



export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
}