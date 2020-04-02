import validateEmail from "../validation/validateEmail";
import validatePassword from "../validation/validatePassword";
import validateConfirm from "../validation/validateConfirm";

export default (values: RegistrationFormValues) => {
  const errors = {} as any;

  errors.email = validateEmail(values.email);

  errors.password = validatePassword(values.password);

  errors.confirm = validateConfirm(values.password, values.confirm);

  if (!errors.email && !errors.password && !errors.confirm) {
    return;
  }

  return errors;
};
