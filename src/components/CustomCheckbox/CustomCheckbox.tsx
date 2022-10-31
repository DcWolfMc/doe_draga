import { InputHTMLAttributes } from "react";
import { Check } from "phosphor-react";
import { FunctionComponent, useState } from "react";
import {CheckBox, CheckboxInput, CheckboxBox } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export const CustomCheckbox: FunctionComponent<CustomCheckboxProps> = ({
  label = "Don't you dare to check me!",
  ...props
}) => {
  return (
    <CheckBox 
      style={props.disabled? {opacity:0.7}:{}}
    >
      <CheckboxInput  disabled={props.disabled} type="checkbox" onChange={props.onChange} />
      <CheckboxBox {...props} active={props.checked!}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
      >
        {props.checked&& <Check size={20} weight={"bold"} color={defaultTheme["gray-100"]}/>}
      </CheckboxBox>
      {label}
    </CheckBox>
  );
};
