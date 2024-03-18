import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import accountValidationSchema from "../utils/accountValidationSchema";

import { UserForm } from "@/app/interfaces/user.types";

export function useFormCreateAccount() {
  return useForm<UserForm>({
    resolver: yupResolver(accountValidationSchema),
  })
};