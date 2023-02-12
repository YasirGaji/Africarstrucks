import React from 'react';
import { 
  FilledButton,
  OutlinedButton,
} from './styles/button'


interface ButtonProps {
  theme: "filled" | "outlined";
  text: string;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { theme, text, className } = props;

  if(theme === "outlined")
    return <OutlinedButton className={className} >{text}</OutlinedButton>
  else
    return <FilledButton className={className}>{text}</FilledButton>

  // return (
  //   <BaseButton>
  //     {theme === "filled" && <FilledButton>{text}</FilledButton>}
  //     {theme === "outlined" && <OutlinedButton>{text}</OutlinedButton>}
  //   </BaseButton>
  // )
}