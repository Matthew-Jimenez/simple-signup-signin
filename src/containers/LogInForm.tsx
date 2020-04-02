import React, { FC, useState } from "react";

// third party modules
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";

// components
import FormikTextField from "../components/Registration/FormikTextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// utils
import validateEmail from "../utils/validation/validateEmail";

// api
import storeToken from "../api/storeToken";
import login from "../api/login";

interface ILogInFormProps {}

const LogInForm: FC<ILogInFormProps> = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<undefined | string>();

  const handleSubmit = async (values: LogInFormValues) => {
    setError(undefined);

    const res = await login({
      email: values.email,
      password: values.password
    });

    if (res.data) {
      storeToken(JSON.stringify(res));

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid }) => (
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
          />

          <Typography gutterBottom={true} variant="body1" color="error">
            {error}
          </Typography>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isValid}
          >
            Login
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
} as LogInFormValues;

export default LogInForm;
