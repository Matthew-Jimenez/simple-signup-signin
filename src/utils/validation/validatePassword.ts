import validate from "validate.js";

const constraints = {
  password: {
    presence: {
      allowEmpty: false,
      message: "is required. "
    },
    length: {
      minimum: 8,
      maximum: 16
    }
  }
};

export default (password?: string) => {
  return validate({ password }, constraints)?.password;
};
