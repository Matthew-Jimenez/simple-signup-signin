import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// containers
import Container from "@material-ui/core/Container";

interface ILogInProps {}

const LogIn: FC<ILogInProps> = props => {
  return (
    <Container>
      <h1>Log In</h1>

      <p>
        Don't have an account? <Link to="/register">Register</Link> now to join
        the action.
      </p>
    </Container>
  );
};

export default LogIn;
