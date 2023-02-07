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

  if(theme === "outlined") {
    return (
      <>
        <OutlinedButton>{text}</OutlinedButton>
      </>
    )
  }

  if (theme === "filled") {
    return (
      <BaseButton>
        <FilledButton>{text}</FilledButton>
      </BaseButton>
    )
  }

  return (
    <BaseButton>
      {theme === "filled" && <FilledButton>{text}</FilledButton>}
      {theme === "outlined" && <OutlinedButton>{text}</OutlinedButton>}
    </BaseButton>
  )
}