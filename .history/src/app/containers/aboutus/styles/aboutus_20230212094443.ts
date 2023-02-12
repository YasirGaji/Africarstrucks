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

`;