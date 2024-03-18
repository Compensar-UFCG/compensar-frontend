import { UserForm } from "@/app/interfaces/user.types";
import { useRouter } from "next/router";

interface useTryCreateUserAccountProps {
  setSnackbar: (isSuccess: boolean, message?: string) => void
}

export const useTryCreateUserAccount = ({ setSnackbar }: useTryCreateUserAccountProps) => {
  const router = useRouter();

  const tryCreateUserAccount = async (userForm: UserForm) => {
    fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForm),
    }).then(({ ok, status }) => {
      if(ok) {
        setSnackbar(true);
        setTimeout(() => router.replace('/login'), 3000);
      } else setSnackbar(false, status === 409 ? `O nome de usuário ou email já estão em uso` : undefined);
    }).catch(() => setSnackbar(false));
  }

  return {
    tryCreateUserAccount
  };
}

