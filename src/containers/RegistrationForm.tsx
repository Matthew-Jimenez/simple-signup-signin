import React, { FC, useState } from "react";

// modules
import { Formik, Field, Form } from "formik";
import { Redirect } from "react-router-dom";

// components
import Button from "@material-ui/core/Button";
import FormikTextField from "../components/Registration/FormikTextField";
import Typography from "@material-ui/core/Typography";

// utils
import validateEmail from "../utils/validation/validateEmail";
import validateConfirm from "../utils/validation/validateConfirm";
import validatePassword from "../utils/validation/validatePassword";

// api
import register from "../api/register";
import TokenManager from "utils/TokenManager";

interface IRegistrationFormProps {}

const RegistrationForm: FC<IRegistrationFormProps> = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<undefined | string>();

  const handleSubmit = async (values: RegistrationFormValues) => {
    setError(undefined);

    const res = await register({
      email: values.email,
      password: values.password
    });

    if (res.data) {
      new TokenManager().storeToken(JSON.stringify(res));

      setSuccess(true);
      return;
    }

    if (res.error) {
      setError(res.error.message);
    }
  };

  if (success) {
    return <Redirect to="/" />;
  }

  return (
    <>
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

            <Typography gutterBottom={true} variant="body1" color="error">
              {error}
            </Typography>

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
    </>
  );
};

const initialValues = {
  email: "",
  password: "",
  confirm: ""
} as RegistrationFormValues;

export default RegistrationForm;
