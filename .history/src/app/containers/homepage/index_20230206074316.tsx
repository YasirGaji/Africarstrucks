import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`
      flex
    `}
`;


export function HomePage() {
  return (
    <PageContainer>
      <h1>Home Page</h1>
    </PageContainer>
  );
}