export const TOKEN_STORAGE = "demo-app:session-token";

export default (sessionToken: string) => {
  try {
    localStorage.setItem(TOKEN_STORAGE, sessionToken);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
