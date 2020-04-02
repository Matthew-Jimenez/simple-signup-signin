import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// components
import Container from "@material-ui/core/Container";

// containers
import RegistrationForm from "../containers/RegistrationForm";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  return (
    <Container>
      <h1>Register</h1>

      <RegistrationForm />

      <p>
        Already have an account? <Link to="/">Log in</Link> to access your
        account.
      </p>
    </Container>
  );
};

export default Register;
