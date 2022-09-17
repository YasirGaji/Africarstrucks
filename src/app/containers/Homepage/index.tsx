import React from "react";
import styled from 'styled-components'
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center
    overflow-x-hidden
  `}
`

export default function Homepage() {
  return (
    <PageContainer>
      Hi!?
    </PageContainer>
  )
}
