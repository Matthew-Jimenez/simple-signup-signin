import Parse from "../api";

export default async ({ email, password }: RegisterParams) => {
  const response = {} as ApiResponse;

  try {
    const user = new Parse.User();

    user.set("username", email);
    user.set("email", email);
    user.set("password", password);

    response.data = await user.signUp();

    return response;
  } catch (error) {
    console.log(error);

    response.error = error;

    return response;
  }
};
