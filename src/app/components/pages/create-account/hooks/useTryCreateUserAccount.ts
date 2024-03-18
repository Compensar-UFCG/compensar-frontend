import { UserForm } from "@/app/interfaces/user.types";
import { useRouter } from "next/router";

interface useTryCreateUserAccountProps {
  setSnackbar: (isSuccess: boolean) => void
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
    }).then(({ ok }) => {
      if(ok) {
        setSnackbar(true);
        setTimeout(() => router.replace('/login'), 3000);
      } else setSnackbar(false);
    }).catch(() => setSnackbar(false));
  }

  return {
    tryCreateUserAccount
  };
}

