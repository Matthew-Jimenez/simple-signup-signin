import validate from "validate.js";

const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: " is required. "
    },
    email: {
      message: "must be in correct format. "
    }
  }
};

export default (email?: string) => {
  return validate({ email }, constraints)?.email;
};
