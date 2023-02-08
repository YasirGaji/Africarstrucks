import React from "react";


export interface MarginerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical"
}

export function Marginer(props: MarginerProps) {
  const { direction } = props;

  if (direction === "horizontal") return <
}