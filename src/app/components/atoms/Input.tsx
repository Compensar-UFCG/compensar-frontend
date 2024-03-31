import { forwardRef } from "react";

import { TextField, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps & {
  label?: string;
  showError: boolean;
  errorMessage?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, showError, errorMessage, ...props}, ref) => {
  return (
    <TextField
      label={label}
      error={showError}
      helperText={errorMessage}
      variant="outlined"
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input;