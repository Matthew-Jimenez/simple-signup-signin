import Parse from "./";

export default async (email: string) => {
  const response = {} as ApiResponse;

  try {
    response.data = await Parse.User.requestPasswordReset(email);

    return response;
  } catch (error) {
    console.log(error);

    response.error = error;

    return response;
  }
};
