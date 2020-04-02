import validate from "validate.js";

const constraints = {
  password: {
    presence: {
      allowEmpty: false
    }
  }
};

export default (password?: string) => {
  return validate({ password }, constraints)?.password;
};
