import styled from "styled-components/macro";
import tw from "twin.macro";
import { Slide as Menu } from 'react-burger-menu';

export const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    min-w-full
    w-full
    max-w-screen-2xl
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

export const NavItem = styled.li`
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