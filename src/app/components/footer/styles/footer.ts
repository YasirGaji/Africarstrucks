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
      text-sm
      text-white
    `}
  }
`;

export const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-3
    md:mr-32
  `}
`;
