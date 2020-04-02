import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ILogInProps {}

const LogIn: FC<ILogInProps> = props => {
  return (
    <div>
      <h1>Log In</h1>

      <p>
        Don't have an account? <Link to="/register">Register</Link> now to join
        the action.
      </p>
    </div>
  );
};

export default LogIn;
