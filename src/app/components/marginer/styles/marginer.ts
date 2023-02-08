import styled from "styled-components/macro";
import tw from "twin.macro";
import { MarginerProps } from "../index";

export const HorizontalMargin = styled.span<MarginerProps>`
  display: flex;
  min-width: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`}
`;

export const VerticalMargin = styled.span<MarginerProps>`
  display: flex;
  min-height: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`}
`;