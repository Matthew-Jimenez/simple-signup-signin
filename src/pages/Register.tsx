import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Logo from "components/@ui/Logo";

// containers
import RegistrationForm from "../containers/RegistrationForm";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  return (
    <>
      <Box p={1}>
        <Logo variant="h4" />
      </Box>

      <Container>
        <Box pt={3}>
          <Typography gutterBottom variant="h3">
            Register
          </Typography>

          <Typography color="textSecondary" variant="body1">
            Create a profile to join the Appname community!
          </Typography>
        </Box>

        <RegistrationForm />

        <Box py={1}>
          <Typography>
            Already have an account? <Link to="/">Log in</Link> to access your
            account.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Register;
