import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

type InputProps = TextFieldProps & {
  label: string;
  showError: boolean;
  errorMessage?: string
}

const Input: FC<InputProps> = ({ label, showError, errorMessage, ...props}) => {
  return (
    <TextField
      {...props}
      id="outlined-basic"
      label={label}
      error={showError}
      helperText={errorMessage}
      variant="outlined"
    />
  )
}

export default Input;