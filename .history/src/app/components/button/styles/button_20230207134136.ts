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
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    [display: flex]
  `}
`;

export const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-black
    hover:bg-transparent
    hover:text-black
    hover:border-black
  `}
`;

export const FilledButton = styled(BaseButton)`
  ${tw`
    border-black
    text-black
    hover:text-white
    hover:bg-black
    hover:border-transparent
  `}
`;