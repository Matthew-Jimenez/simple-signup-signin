import React, { FC } from "react";

import { RouteComponentProps, Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

interface IPasswordResetSuccessProps extends RouteComponentProps {}

const PasswordResetSuccess: FC<IPasswordResetSuccessProps> = ({
  location,
  match
}) => {
  console.log(location);
  console.log(match);

  return (
    <Container>
      <Box pt={3}>
        <Typography variant="h3">Password Reset Successful</Typography>

        <Link to="/login">log in now</Link>
      </Box>
    </Container>
  );
};

export default PasswordResetSuccess;
