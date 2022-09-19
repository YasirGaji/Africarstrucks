import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../containers/Homepage';
import styled from 'styled-components'
import React from 'react'
import tw from 'twin.macro'

const AppContainer = styled.div`
  ${
    tw`
      w-full
      h-full
      flex
      flex-col
    `
  }
`;

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  )
}

export default Home
