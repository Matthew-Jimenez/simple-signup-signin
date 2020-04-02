import Parse from "../api";

export default async () => {
  const response = {} as ApiResponse;

  try {
    response.data = await Parse.User.logOut();

    return response;
  } catch (error) {
    console.log(error);

    response.error = error;

    return response;
  }
};
