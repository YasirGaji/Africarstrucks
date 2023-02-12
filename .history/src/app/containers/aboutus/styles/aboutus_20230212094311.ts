import styled from "styled-components/macro";
import tw from "twin.macro";

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

  @media (min-width: 320px) and (max-width: 480px) {
    height: 10em;
    margin-left: 0;
  }
  
`;