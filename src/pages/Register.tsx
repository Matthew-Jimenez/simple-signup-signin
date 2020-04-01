import React, { FC } from "react";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  return (
    <>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="confirm password" />

        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
