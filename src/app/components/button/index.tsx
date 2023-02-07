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

}