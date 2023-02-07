import styled from "styled-components/macro";
import tw from "twin.macro";
import { SCREENS } from  "../../../components/responsive";

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
  margin-top: 6em;

  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`;

export const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}

  
`;

export const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative  
    mt-20
  `}
`;


export const Slogan = styled.h1`
  ${tw`
    font-bold
    text-3xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-3
    mt-2
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    [z-index: 99]
    flex
    [width: 100]
  `}

  @media (max-width: ${SCREENS.sm}) {
    ${tw`
      [min-width: 5em]
      text-center
    `}
  }
`;

export const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}

  @media (min-width: ${SCREENS.sm}) {
   
  }
`;

export const BlobContainer = styled.div`
  width: 27em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 27em;
    max-height: 10em;
    right: -2em;
    transform: rotate(-25deg);
  }
`;

export const StandaloneVehicle = styled.div`
  width: auto;
  height: 10em;
  right: -1.4em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`;

export const ButtonContainer = styled.div`
  ${tw`
    flex
    z-20
  `}

  @media (max-width: ${SCREENS.sm}) {
    ${tw`
      [min-width: 6em]
      [margin-left: 3em]
      mt-5
    `}
  }
`;

export const Mobilediv = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    w-full
    h-full
  `}
`;