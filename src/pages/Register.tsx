import React, { FC } from "react";
import RegistrationForm from "../containers/RegistrationForm";

interface IRegisterProps {}

interface FormValues {
  email: string;
  password: string;
  confirm: string;
}

const Register: FC<IRegisterProps> = props => {
  return (
    <div>
      <h1>Register</h1>

      <RegistrationForm />
    </div>
  );
};

export default Register;
