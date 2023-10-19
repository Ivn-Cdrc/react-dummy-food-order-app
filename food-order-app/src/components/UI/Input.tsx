import React from "react";
import classes from "./Input.module.css";

// these are all default props to any input element
export interface inputConfigObj {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

interface InputProps {
  label: string;
  input: inputConfigObj;
}

// this is a reusable input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, input }: InputProps, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
