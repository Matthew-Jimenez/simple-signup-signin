import React, { FC } from "react";

import { useForm } from "react-hook-form";

interface IRegisterProps {}

const Register: FC<IRegisterProps> = props => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" type="email" placeholder="email" ref={register} />

        <input
          name="password"
          type="password"
          placeholder="password"
          ref={register}
        />

        <input
          name="confirm"
          type="password"
          placeholder="confirm password"
          ref={register}
        />

        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
