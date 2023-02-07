import React from 'react';
import { 
  BaseButton,
  FilledButton,
  OutlinedButton,
} from './styles/button'


interface ButtonProps {
  theme: "filled" | "outlined";
  text: string;
}

export function Button(props: ButtonProps) {
  const { theme, text } = props;

  // if (theme === "filled") {
  //   return (
  //     <>
  //       <FilledButton>{text}</FilledButton>
  //     </>
  //   )
  // } else {
  //   return (
  //     <>
  //       <OutlinedButton>{text}</OutlinedButton>
  //     </>
  //   )
  // }

  return (
    <BaseButton>
      {theme === "filled" && <FilledButton>{text}</FilledButton>}
      {theme === "outlined" && <OutlinedButton>{text}</OutlinedButton>}
    </BaseButton>
  )
}