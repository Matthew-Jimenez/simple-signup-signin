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
import requestPasswordReset from "api/requestPasswordReset";

// api

interface IRequestPasswordResetProps {}

const RequestPasswordResetForm: FC<IRequestPasswordResetProps> = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<undefined | string>();

  const handleSubmit = async (values: RequestPasswordResetValues) => {
    setError(undefined);

    const res = await requestPasswordReset(values.email);

    if (res.data) {
      setSuccess(true);
      return;
    }

    if (res.error) {
      setError(res.error.message);
    }
  };

  if (success) {
    return <Redirect to="/request-password-reset/success" />;
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

          <Typography gutterBottom={true} variant="body1" color="error">
            {error}
          </Typography>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isValid}
          >
            Get Link
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const initialValues = {
  email: ""
} as RequestPasswordResetValues;

export default RequestPasswordResetForm;
