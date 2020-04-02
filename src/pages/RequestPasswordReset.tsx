import React, { FC } from "react";

// modules
import { Link, Switch, Route } from "react-router-dom";

// containers
import RequestPasswordResetForm from "containers/RequestPasswordResetForm";

// components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// api

interface IRequestPasswordResetProps {}

const RequestPasswordReset: FC<IRequestPasswordResetProps> = props => {
  return (
    <Container>
      <Switch>
        <Route exact path="/request-password-reset">
          <Box pt={3}>
            <Typography variant="h1">Reset Password</Typography>

            <Typography variant="body1">
              Enter the email address associated with your account to receive a
              one time password reset link.
            </Typography>
          </Box>

          <RequestPasswordResetForm />

          <Box py={1}>
            <Typography variant="body1">
              Remember your log in credentials? <Link to="/login">Log in</Link>{" "}
              now to join the action.
            </Typography>
          </Box>
        </Route>

        <Route path="/request-password-reset/success" exact>
          <Box pt={3}>
            <Typography variant="h1">Email Sent</Typography>

            <Typography variant="body1">
              An email has been sent to the provided email account. Please use
              the link provided in the email to reset your password.
            </Typography>
          </Box>
        </Route>
      </Switch>
    </Container>
  );
};

export default RequestPasswordReset;
