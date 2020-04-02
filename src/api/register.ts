import Parse from "../api";

export default async ({ email, password }: RegisterParams) => {
  const user = new Parse.User();

  user.set("username", email);
  user.set("email", email);
  user.set("password", password);

  const res = await user.signUp();

  return res;
};
