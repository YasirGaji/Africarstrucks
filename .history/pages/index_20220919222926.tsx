import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import React from 'react'
import tw from 'twin.macro'

const AppContainer = styled.div`
  ${
    tw`
      w-full
      h-full
    `
  }
`;

const Home: NextPage = () => {
  return (
    <div className='bg-white text-center text-black'>
      Hello.
    </div>
  )
}

export default Home
