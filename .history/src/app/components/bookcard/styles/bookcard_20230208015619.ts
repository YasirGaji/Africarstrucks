import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { SCREENS } from '../../../responsive';

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
    mt-20
  `}

  @media  (max-width: ${SCREENS.sm}) {
    margin-top: 30px;
  }
`;

export const ItemContainer = styled.div`
  ${tw`
    flex
  `}
`;

export const Icon = styled.span`
  ${tw`
    text-black
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3

  `}
`;

export const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
  `}
`;

export const LineSeparator = styled.span`
  width: 2px;
  height: 45%;

  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;