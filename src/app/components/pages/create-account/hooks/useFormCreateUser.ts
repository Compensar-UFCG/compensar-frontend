import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import userValidationSchema from "../utils/userValidationSchema";

import { UserForm } from "@/app/interfaces/user.types";

export function useFormCreateUser() {
  return useForm<UserForm>({
    resolver: yupResolver(userValidationSchema),
  })
};