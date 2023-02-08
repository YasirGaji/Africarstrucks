import React from "react";
import {
  HorizontalMargin,
  VerticalMargin,
} from './styles/marginer'


export interface MarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical"
}

export function Marginer(props: MarginerProps) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else return <VerticalMargin {...props} />;
}