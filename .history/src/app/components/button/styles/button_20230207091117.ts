import styled from "styled-components/macro";
import tw from "twin.macro";

export const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    text-white
    outline-none
    rounded-md
    text-xs
    font-semibold
    border-transparent
  `}
`;