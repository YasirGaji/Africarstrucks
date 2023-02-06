import styled from "styled-components/macro";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    
  `}
`;

export const LogoContainer = styled.div``;

export const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;