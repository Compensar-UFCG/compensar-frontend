import { FC, useState } from "react";
import { Controller } from "react-hook-form"

import { Button, InputAdornment, IconButton } from "@mui/material";
import SnackBarCustom from "@components/atoms/SnackBar";
import Input from "@components/atoms/Input";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { AlertType } from "@components/atoms/typings";
import { useFormLogin } from "./hooks/useFormLogin";
import { useTryLogin } from "./hooks/useTryLogin";
import { LoginForm } from "./typings";

const LoginForm: FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [typeSnackbar, setTypeSnackbar] = useState<AlertType>("success");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  
  const setShowSnackbar = (message?: string) => {
    setOpenSnackbar(true);
    setSnackbarMessage(message || "Ocorreu um erro tentar logar na conta");
    setTypeSnackbar("error")
  }

  const { control, handleSubmit } = useFormLogin();
  const { tryLogin, isPending } = useTryLogin({ setSnackbar: setShowSnackbar });

  const onSubmit = async (loginForm: LoginForm) => tryLogin(loginForm);

  return (
    <form
      className="login_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login_context">
        <Controller
          name="user"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <Input
              label="Seu nome de usuário ou email"
              showError={!!errors.user?.message}
              errorMessage={errors.user?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <Input
              label="Sua senha"
              showError={!!errors.password?.message}
              errorMessage={errors.password?.message}
              type={showPassword ? "text": "password"}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }}
              {...field}
            />
          )}
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        disabled={isPending}
      >Acessar</Button>
      <SnackBarCustom
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        type={typeSnackbar}
      />
    </form>
  )
}

export default LoginForm;