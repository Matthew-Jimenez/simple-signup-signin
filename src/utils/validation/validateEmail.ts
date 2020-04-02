import validate from "validate.js";

const constraints = {
  email: {
    email: true,
    presence: {
      allowEmpty: false
    }
  }
};

export default (email?: string) => {
  return validate({ email }, constraints)?.email;
};
