import validate from "validate.js";

const constraints = {
  confirm: {
    presence: {
      allowEmpty: false
    }
  }
};

export default (password?: string, confirm?: string) => {
  if (confirm !== password) {
    return "Passwords must match";
  }

  return validate({ confirm }, constraints)?.confirm;
};
