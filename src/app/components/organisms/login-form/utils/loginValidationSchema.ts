import * as yup from "yup"

interface LoginErrorMessages {
  userEmpty: string;
  userInvalid: string;
  passwordEmpty: string;
}

export const loginErrorMessages: LoginErrorMessages = {
  userEmpty: 'O nome de usuário ou email é obrigatório.',
  userInvalid: 'O campo deve ser um nome de usuário ou um endereço de email válido',
  passwordEmpty: 'A senha é obrigatória.',
}

const loginValidationSchema = yup.object().shape({
  user: yup.string().test(
    'usernameOrEmail',
    loginErrorMessages.userInvalid,
    value => {
      const isEmail = yup
        .string()
        .email()
        .isValidSync(value);

      const isUsername = yup
        .string()
        .min(3)
        .max(15)
        .matches(/^\S*$/)
        .isValidSync(value);

      return isEmail || isUsername;
    }
  ) .trim().required(loginErrorMessages.userEmpty),
  password: yup.string()
    .required(loginErrorMessages.passwordEmpty)
    .trim(),
});

export default loginValidationSchema;
