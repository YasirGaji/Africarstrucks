import styled from "styled-components/macro";
import tw from "twin.macro";
import { Button } from "../../button";

export const TruckContainer = styled.div`
  width: 18em;
  height: 29em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);


  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-2
    sm:m-3
  `}
`;

export const TruckThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TruckName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `}
`;

export const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    mt-3
  `}
`;


export const DailyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
    mr-3
  `}
`;

export const MonthlyPrice = styled.h5`
  ${tw`
    text-black
    font-bold
    text-sm
  `}
`;

export const SmallIcon = styled.div`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

export const TruckDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

export const TruckDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

export const TruckInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

export const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;


  ${tw`
    flex 
    bg-gray-300
    mt-2
    mb-2
  `}
`;  

export const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

export  const SmallText = styled.h6`
  color: inherit;


  ${tw`
    inline-flex
    text-xs
    font-thin
  `}
`;