import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

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
      <h1>Home Page</h1>
    </PageContainer>
  );
}