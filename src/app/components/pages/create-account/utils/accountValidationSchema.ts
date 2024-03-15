import * as yup from "yup"

const accountValidationSchema = yup.object().shape({
  username: yup.string().required().min(3).max(15).matches(/^\S*$/),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(12).matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/),
});

export default accountValidationSchema;
