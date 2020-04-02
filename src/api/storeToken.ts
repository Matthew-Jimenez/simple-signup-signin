import Cookies from "js-cookie";

export const TOKEN_STORAGE = "demo-app:session-token";

export default (sessionToken: string) => {
  try {
    Cookies.set(TOKEN_STORAGE, sessionToken);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
