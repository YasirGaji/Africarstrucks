import React from "react";
import { Navbar } from "../../components";
import { 
  PageContainer 
} from "./styles/homepage";



export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
}