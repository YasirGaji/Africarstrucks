import React from "react";

import { Navbar } from "../../components";

const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-hidden
    `}
`;


export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
}