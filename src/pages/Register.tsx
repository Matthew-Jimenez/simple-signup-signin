import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// containers
import RegistrationForm from "../containers/RegistrationForm";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  return (
    <Container>
      <Box pt={3}>
        <Typography variant="h1">Register</Typography>
      </Box>

      <RegistrationForm />

      <Box py={1}>
        <Typography>
          Already have an account? <Link to="/">Log in</Link> to access your
          account.
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
