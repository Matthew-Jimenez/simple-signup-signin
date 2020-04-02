import Parse from "../api";

export default async ({ email, password }: RegisterParams) => {
  const response = {} as ApiResponse;

  try {
    response.data = await Parse.User.logIn(email, password);

    return response;
  } catch (error) {
    console.log(error);

    response.error = error;

    return response;
  }
};
