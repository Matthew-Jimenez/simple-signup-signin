import React, { FC } from "react";

// modules
import { Link, Switch, Route } from "react-router-dom";

// containers
import RequestPasswordResetForm from "containers/RequestPasswordResetForm";

// components
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Logo from "components/@ui/Logo";

// api

interface IRequestPasswordResetProps {}

const RequestPasswordReset: FC<IRequestPasswordResetProps> = props => {
  return (
    <Container>
      <Box py={1}>
        <Logo variant="h4" />
      </Box>

      <Switch>
        <Route exact path="/request-password-reset">
          <Box pt={3}>
            <Typography gutterBottom variant="h3">
              Reset Password
            </Typography>

            <Typography color="textSecondary" variant="body1">
              Enter the email address associated with your account to receive a
              one time password reset link.
            </Typography>
          </Box>

          <RequestPasswordResetForm />

          <Box py={1}>
            <Typography color="textSecondary" variant="body1">
              Remember your log in credentials?
              <Link to="/login"> Log in</Link> now to join the action.
            </Typography>
          </Box>
        </Route>

        <Route path="/request-password-reset/success" exact>
          <Box pt={3}>
            <Typography variant="h3">Email Sent</Typography>

            <Typography color="textSecondary" variant="body1">
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
