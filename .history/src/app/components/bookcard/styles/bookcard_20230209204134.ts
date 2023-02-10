import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { SCREENS } from '../../responsive';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

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
    margin-top: 10em;
  }
`;

export const ItemContainer = styled.div`
  ${tw`
    flex
    relative
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
    cursor-pointer
    select-none
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

export const DateCalendar = styled(Calendar)`
  max-width: none;
  position: absolute;
  top: 0;
  left: 0;
  width: none;
  user-select: none;

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -1.5em;
  }
`;

export const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
    md:ml-3
  `}
`;