import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;


const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Homepage</h1>
    </PageContainer>
  );
}
