import Cookies from "js-cookie";

import { TOKEN_STORAGE } from "./storeToken";

export default () => {
  try {
    Cookies.remove(TOKEN_STORAGE);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
