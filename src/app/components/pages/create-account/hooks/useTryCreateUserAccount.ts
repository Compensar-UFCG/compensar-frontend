import { useState } from "react";

import { UserForm } from "@/app/interfaces/user.types";

export const useTryCreateUserAccount = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const tryCreateUserAccount = async (userForm: UserForm) => {
    fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForm),
    }).then(res => {
      if(res.ok) setIsSuccess(true)
    });
  }

  return {
    tryCreateUserAccount,
    isSuccess
  };
}

