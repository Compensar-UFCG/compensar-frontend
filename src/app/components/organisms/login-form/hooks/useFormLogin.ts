import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import loginValidationSchema from "../utils/loginValidationSchema";
import { LoginForm } from "../typings";

export function useFormLogin() {
  return useForm<LoginForm>({
    resolver: yupResolver(loginValidationSchema),
  })
};