import React, { FC } from "react";

import { Formik, FormikHelpers, Field, Form, ErrorMessage } from "formik";
import validateRegistrationForm from "../utils/registration/validateRegistrationForm";

interface IRegisterProps {}

interface FormValues {
  email: string;
  password: string;
  confirm: string;
}

const Register: FC<IRegisterProps> = props => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirm: "" } as FormValues}
      onSubmit={handleSubmit}
      validate={validateRegistrationForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" type="email" placeholder="email" />

          <ErrorMessage name="email" component="div" />

          <Field name="password" type="password" placeholder="password" />

          <ErrorMessage name="password" component="div" />

          <Field
            name="confirm"
            type="password"
            placeholder="confirm password"
          />

          <ErrorMessage name="confirm" component="div" />

          <button disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
