import React, { FC } from "react";

import { Formik, FormikHelpers, Field, Form, ErrorMessage } from "formik";

import validateRegistrationForm from "../utils/registration/validateRegistrationForm";

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateRegistrationForm}
    >
      {({ isSubmitting, isValid, dirty }) => {
        return (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="email" />
            </div>

            <ErrorMessage name="email" component="div" />

            <div>
              <Field name="password" type="password" placeholder="password" />
            </div>

            <ErrorMessage name="password" component="div" />

            <div>
              <Field
                name="confirm"
                type="password"
                placeholder="confirm password"
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
