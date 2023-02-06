import styled from "styled-components/macro";
import tw from "twin.macro";

export const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-hidden
    `}
`;

export const TopSectionContainer = styled.div`
  min-height: 400px;

  ${tw`
    w-full
  `}
`;
