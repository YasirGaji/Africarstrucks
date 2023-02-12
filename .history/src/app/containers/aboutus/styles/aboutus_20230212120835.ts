import styled from "styled-components/macro";
import tw from "twin.macro";
import { SCREENS } from "../../../components/responsive";

export const AboutUsContainer = styled.div`
  max-width: 1536px;

  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `}
`;

export const TruckContainer = styled.div`
  width: auto;
  height: 15em;
  // margin-left: -30em;

  img {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 26em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

export const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-56
    2xl:ml-16
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

export const InfoText = styled.p`
  ${tw`
    text-sm
    md:text-base
    text-gray-500
    md:max-w-2xl
    mt-4
    font-normal
  `}
`;