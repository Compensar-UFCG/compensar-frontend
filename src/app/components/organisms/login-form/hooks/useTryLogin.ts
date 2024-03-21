import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { LoginForm } from "../typings";
import { LoginSubmitForm } from "@app/interfaces/login.types";

interface useTryLoginProps {
  setSnackbar: (message?: string) => void
}

const getLoginSubmitFormParse = (value: string) => {
  const isEmail = yup.string().email().isValidSync(value);

  if(isEmail) return { "email": value }
  return { "username": value };
};

const login = async (loginSubmitForm: LoginSubmitForm) => {
  return await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginSubmitForm),
  })
}

export const useTryLogin = ({ setSnackbar }: useTryLoginProps) => {
  const router = useRouter();

  const {mutate, ...props } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: ({ ok, status }) => {
      if(ok) router.replace('/home')
      else setSnackbar(status === 401 ? 'O login ou senha incorretos' : undefined);
    }
  })

  const tryLogin = async (loginForm: LoginForm) => {
    const { user, password } = loginForm;

    const loginSubmitForm = {
      ...getLoginSubmitFormParse(user),
      password
    }
    mutate(loginSubmitForm);
  }

  return {
    tryLogin,
    ...props
  };
}

