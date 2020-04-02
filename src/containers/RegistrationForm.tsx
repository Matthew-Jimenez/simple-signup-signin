import React, { FC } from "react";

// modules
import { Formik, FormikHelpers, Field, Form } from "formik";

// components
import { TextField } from "formik-material-ui";

// utils
import validateEmail from "../utils/validation/validateEmail";
import validateConfirm from "../utils/validation/validateConfirm";
import validatePassword from "../utils/validation/validatePassword";
import { Button } from "@material-ui/core";
import register from "../api/register";

interface IRegistrationFormProps {
  onSubmit?: () => void;
}

interface FormValues {
  email: string;
  password: string;
  confirm: string;
}

const initialValues = { email: "", password: "", confirm: "" } as FormValues;

const TextFieldVariant = (props: any) => {
  return (
    <TextField margin="normal" variant="filled" fullWidth={true} {...props} />
  );
};

const RegistrationForm: FC<IRegistrationFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    await register({
      email: values.email,
      password: values.password
    });

    onSubmit && onSubmit();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid, dirty, values, errors }) => (
        <Form>
          <Field
            component={TextFieldVariant}
            type="email"
            name="email"
            placeholder="email"
            validate={validateEmail}
          />

          <Field
            component={TextFieldVariant}
            name="password"
            type="password"
            placeholder="password"
            validate={validatePassword}
          />

          <Field
            component={TextFieldVariant}
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

export default RegistrationForm;
