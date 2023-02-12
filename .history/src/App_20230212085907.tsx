import React from 'react';
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { HomePage } from './app/containers';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
  `}
`;

function App() {
  return (
    <>
      <AppContainer>
        <HomePage />
      </AppContainer>
      
    </>
  );
}

export default App;
