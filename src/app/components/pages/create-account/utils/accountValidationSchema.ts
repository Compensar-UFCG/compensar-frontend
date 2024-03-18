import * as yup from "yup"

interface AccountErrorMessages {
  usernameEmpty: string;
  usernameMin: string;
  usernameMax: string;
  usernameMacthes: string;
  emailEmpty: string;
  emailInvalid: string;
  passwordEmpty: string;
  passwordMin: string;
  passwordMax: string;
  passwordMacthes: string;
}

export const accountErrorMessages: AccountErrorMessages = {
  usernameEmpty: 'O nome de usuário é obrigatório.',
  usernameMin: 'O nome de usuário deve ter pelo menos 3 caracteres.',
  usernameMax: 'O nome de usuário deve ter no máximo 15 caracteres.',
  usernameMacthes: 'O nome de usuário não pode conter espaçamento em branco.',
  emailEmpty: 'O email é obrigatório.',
  emailInvalid: 'O email é inválido.',
  passwordEmpty: 'A senha é obrigatória.',
  passwordMin: 'A senha deve conter pelo menos 8 caracteres.',
  passwordMax: 'A senha deve ter no máximo 12 caracteres.',
  passwordMacthes: 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.',
}

const accountValidationSchema = yup.object().shape({
  username: yup.string()
    .required(accountErrorMessages.usernameEmpty)
    .trim()
    .min(3, accountErrorMessages.usernameMin)
    .max(15, accountErrorMessages.usernameMax)
    .matches(/^\S*$/, accountErrorMessages.usernameMacthes),
  email: yup.string()
    .required(accountErrorMessages.emailEmpty)
    .trim()
    .email(accountErrorMessages.emailInvalid),
  password: yup.string()
    .required(accountErrorMessages.passwordEmpty)
    .trim()
    .min(8, accountErrorMessages.passwordMin)
    .max(12, accountErrorMessages.passwordMax)
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, accountErrorMessages.passwordMacthes),
});

export default accountValidationSchema;
