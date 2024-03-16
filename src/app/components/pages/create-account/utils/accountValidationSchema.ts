import * as yup from "yup"

const accountValidationSchema = yup.object().shape({
  username: yup.string()
    .required('O nome de usuário é obrigatório.')
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.')
    .max(15, 'O nome de usuário deve ter no máximo 15 caracteres.')
    .matches(/^\S*$/, 'O nome de usuário não pode conter espaçamento em branco.'),
  email: yup.string()
    .required('O email é obrigatório.')
    .email('O email é inválido.'),
  password: yup.string()
    .required('A senha  é obrigatória.')
    .min(8, 'A senha deve conter pelo menos 8 caracteres.')
    .max(12, 'A senha deve ter no máximo 12 caracteres.')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/, 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.'),
});

export default accountValidationSchema;
