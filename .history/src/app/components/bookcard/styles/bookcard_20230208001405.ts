import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const CardContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-6
    md:pr-6
  `}
`;

export const ItemContainer = styled.div`
  ${tw`
    flex
  `}
`;

export const Icon = styled.span`
  ${tw`
    text-black
  `}
`;

export const BookCover = styled.div``;