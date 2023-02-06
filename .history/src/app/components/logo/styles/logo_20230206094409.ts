import styled from "styled-components/macro";
import tw from "twin.macro";

export const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;