import React, { FC } from "react";

// modules
import { Formik, Field, Form } from "formik";

// components
import Button from "@material-ui/core/Button";
import FormikTextField from "../components/Registration/FormikTextField";

// utils
import validateEmail from "../utils/validation/validateEmail";
import validateConfirm from "../utils/validation/validateConfirm";
import validatePassword from "../utils/validation/validatePassword";

// api
import register from "../api/register";

interface IRegistrationFormProps {
  onSubmit?: () => void;
}

const RegistrationForm: FC<IRegistrationFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (values: RegistrationFormValues) => {
    await register({
      email: values.email,
      password: values.password
    });

    onSubmit && onSubmit();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid, dirty, values }) => (
        <Form>
          <Field
            component={FormikTextField}
            type="email"
            name="email"
            placeholder="email"
            validate={validateEmail}
          />

          <Field
            component={FormikTextField}
            name="password"
            type="password"
            placeholder="password"
            validate={validatePassword}
          />

          <Field
            component={FormikTextField}
            name="confirm"
            type="password"
            placeholder="confirm password"
            validate={(confirmVal?: string) => {
              return validateConfirm(values.password, confirmVal);
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isValid || !dirty}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const initialValues = {
  email: "",
  password: "",
  confirm: ""
} as RegistrationFormValues;

export default RegistrationForm;
