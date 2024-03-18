import { FC } from "react";
import { Alert, Snackbar } from "@mui/material";
import { AlertType } from "./typings";

export interface SnackBarCustomProps {
  open: boolean;
  message: string;
  type: AlertType;
  onClose: () => void;
}

const SnackBarCustom: FC<SnackBarCustomProps> = ({ open, message, type, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBarCustom;