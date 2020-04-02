import validate from "validate.js";

const lowerCaseLetter = /(.*[a-z].*)/;
const upperCaseLetter = /(.*[A-Z].*)/;
const oneDigit = /(.*\d.*)/;

const constraints = {
  password: {
    presence: {
      allowEmpty: false,
      message: "is required. "
    },
    length: {
      minimum: 8,
      maximum: 16
    },
    format: {
      pattern: lowerCaseLetter,
      message: "must include one lower case letter. "
    }
  }
};

const upperCaseConstraint = {
  password: {
    format: {
      pattern: upperCaseLetter,
      message: "must contain one upper case letter. "
    }
  }
};

const oneDigitConstraint = {
  password: {
    format: {
      pattern: oneDigit,
      message: "must contain one digit. "
    }
  }
};

export default (password?: string) => {
  const errors = [validate({ password }, constraints)?.password];

  if (!errors) {
    return;
  }

  const upperCaseErrors = [
    validate({ password }, upperCaseConstraint)?.password
  ].flat();

  errors.push(upperCaseErrors);

  const oneDigitError = [
    validate({ password }, oneDigitConstraint)?.password
  ].flat();

  errors.push(oneDigitError);

  console.log(errors);

  return errors.filter(item => item != null);
};
