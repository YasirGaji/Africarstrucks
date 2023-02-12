import styled from "styled-components/macro";
import tw from "twin.macro";
import { SCREENS } from "../../../components/responsive";

export const AboutUsContainer = styled.div`
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
  margin-left: -30em;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }

  ${tw`w-1/2`}
`;

export const InfoContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    md:ml-9
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
    max-w-2xl
    mt-4
    font-normal
  `}
`;