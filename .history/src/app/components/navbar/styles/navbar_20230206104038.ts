import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link as ReactRouterLink } from "react-router-dom";

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

export const NavItem = styled(ReactRouterLink)`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}
`;