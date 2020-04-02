import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// containers
import RegistrationForm from "../containers/RegistrationForm";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  return (
    <div>
      <h1>Register</h1>

      <RegistrationForm />

      <p>
        Already have an account? <Link to="/">Log in</Link> to access your
        account.
      </p>
    </div>
  );
};

export default Register;
