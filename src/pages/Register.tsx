import React, { FC } from "react";

import { Formik, FormikHelpers, Field, Form, ErrorMessage } from "formik";

import validateRegistrationForm from "../utils/registration/validateRegistrationForm";

interface IRegisterProps {}

interface FormValues {
  email: string;
  password: string;
  confirm: string;
}

const initialValues = { email: "", password: "", confirm: "" } as FormValues;

const Register: FC<IRegisterProps> = props => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateRegistrationForm}
    >
      {({ isSubmitting, isValid, dirty }) => {
        return (
          <Form>
            <Field type="email" name="email" placeholder="email" />

            <ErrorMessage name="email" component="div" />

            <Field name="password" type="password" placeholder="password" />

            <ErrorMessage name="password" component="div" />

            <Field
              name="confirm"
              type="password"
              placeholder="confirm password"
            />

            <ErrorMessage name="confirm" component="div" />

            <button disabled={isSubmitting || !isValid || !dirty}>
              Register
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Register;
