import React, { FC } from "react";

import { Formik, FormikHelpers, Field, Form, ErrorMessage } from "formik";

import validateEmail from "../utils/validation/validateEmail";
import validateConfirm from "../utils/validation/validateConfirm";
import validatePassword from "../utils/validation/validatePassword";

interface IRegistrationFormProps {}

interface FormValues {
  email: string;
  password: string;
  confirm: string;
}

const initialValues = { email: "", password: "", confirm: "" } as FormValues;

const RegistrationForm: FC<IRegistrationFormProps> = props => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid, dirty, values }) => {
        return (
          <Form>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="email"
                validate={validateEmail}
              />
            </div>

            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                name="password"
                type="password"
                placeholder="password"
                validate={validatePassword}
              />
            </div>

            <ErrorMessage name="password" component="div" />

            <div>
              <Field
                name="confirm"
                type="password"
                placeholder="confirm password"
                validate={(confirmVal?: string) => {
                  return validateConfirm(values.password, confirmVal);
                }}
              />
            </div>

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

export default RegistrationForm;
