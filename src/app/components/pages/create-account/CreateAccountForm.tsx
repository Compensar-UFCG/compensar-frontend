import { FC, useState } from "react";
import { Controller } from "react-hook-form"
import { useRouter } from "next/router";

import { useTryCreateUserAccount } from "./hooks/useTryCreateUserAccount";
import { useFormCreateAccount } from "./hooks/useFormCreateAccount";

import { TextField, Button } from "@mui/material";
import SnackBarCustom from "@components/atoms/SnackBar";

import { AlertType } from "@components/atoms/typings";
import { UserForm } from "@/app/interfaces/user.types";

const CreateAccountForm: FC = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [typeSnackbar, setTypeSnackbar] = useState<AlertType>("success");

  const router = useRouter();
  const { control, handleSubmit } = useFormCreateAccount();
  const { isSuccess, tryCreateUserAccount } = useTryCreateUserAccount();

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

  const onSubmit = async (userForm: UserForm) => {
    setDisabledBtn(true);
    tryCreateUserAccount(userForm);
    
    setShowSnackbar(isSuccess);
    if(isSuccess) setTimeout(() => router.replace('/login'), 3000);
    setTimeout(() =>  setDisabledBtn(false), 4000);
  }

  return (
    <form
      className="create-user_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="create-user_context">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <TextField
              id="standard-basic"
              label="Seu nome"
              variant="standard"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <TextField
              id="standard-basic"
              label="Seu nome de usuário"
              variant="standard"
              error={!!errors.username?.message}
              helperText={errors.username?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <TextField
              id="standard-basic"
              label="Seu e-mail"
              variant="standard"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, formState: { errors } }) => (
            <TextField
              id="standard-basic"
              label="Sua senha"
              variant="standard"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
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