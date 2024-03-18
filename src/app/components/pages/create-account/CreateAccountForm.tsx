import { FC, useState } from "react";
import { Controller } from "react-hook-form"

import { useTryCreateUserAccount } from "./hooks/useTryCreateUserAccount";
import { useFormCreateAccount } from "./hooks/useFormCreateAccount";

import { Button, InputAdornment, IconButton } from "@mui/material";
import SnackBarCustom from "@components/atoms/SnackBar";
import Input from "@components/atoms/Input";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { AlertType } from "@components/atoms/typings";
import { UserForm } from "@/app/interfaces/user.types";

const CreateAccountForm: FC = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [typeSnackbar, setTypeSnackbar] = useState<AlertType>("success");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  
  const setShowSnackbar = (isSuccess: boolean) => {
    setOpenSnackbar(true);
    if(isSuccess) {
      setSnackbarMessage("Sua conta foi criada com sucesso");
      setTypeSnackbar("success");
    } else {
      setSnackbarMessage("Ocorreu um erro ao criar conta");
      setTypeSnackbar("error");
    }
  }

  const { control, handleSubmit } = useFormCreateAccount();
  const { tryCreateUserAccount } = useTryCreateUserAccount({ setSnackbar: setShowSnackbar });

  const onSubmit = async (userForm: UserForm) => {
    setDisabledBtn(true);
    tryCreateUserAccount(userForm);
    setTimeout(() =>  setDisabledBtn(false), 3000);
  }

  return (
    <form
      className="create-account_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="create-account_context">
      <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <Input
              label="Seu e-mail"
              showError={!!errors.email?.message}
              errorMessage={errors.email?.message}
              {...field}
          />
        )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <Input
              label="Seu nome de usuário"
              showError={!!errors.username?.message}
              errorMessage={errors.username?.message}
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
        disabled={disabledBtn}
      >Criar conta</Button>
      <SnackBarCustom
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        type={typeSnackbar}
      />
    </form>
  )
}

export default CreateAccountForm;