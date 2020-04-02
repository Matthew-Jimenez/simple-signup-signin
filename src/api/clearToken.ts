import { TOKEN_STORAGE } from "./storeToken";

export default () => {
  try {
    localStorage.removeItem(TOKEN_STORAGE);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
