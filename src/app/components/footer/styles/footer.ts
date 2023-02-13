import styled from "styled-components/macro";
import tw from "twin.macro";


export const FooterContainer = styled.div`
  min-height: 25em;


  ${tw`
    min-w-full
    bg-gray-900
    pt-7
    pb-1
    flex
    flex-wrap
    justify-center
  `}
`;

export const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-3
    md:mr-16
    px-10
    md:px-3
    mb-3
  `}
`;

export const TextLogo = styled.h1`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-white
    m-3
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
    max-w-screen-2xl
    w-full
    flex
    flex-wrap
    h-full
    justify-center
  `}
`;

export const AboutText = styled.p`
  ${tw`
    text-sm
    text-white
    max-w-xs
    leading-5
    mt-2
    font-light
  `}
`;

export const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

export const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `}
`;

export const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-xs
      text-white
      hover:text-gray-200
      transition-all
    `}
  }
`;

export const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-3
    md:mr-32
    px-10
    md:px-3
    mb-3
  `}
`;


export const Icon = styled.span`
  ${tw`
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

export const HorizontalContainer = styled.div`
  ${tw`
    flex
    mb-5
  `}
`;

export const SmallText = styled.h6`
  ${tw`
    text-white
    text-xs
  `}
`;

export const ButtomContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    px-12
  `}
`;

export const CopyRightText = styled.p`
  font-size: 12px;

  ${tw`
    text-gray-400
  `}
`;