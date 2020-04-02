import Cookies from "js-cookie";

import Parse from "./index";

import { TOKEN_STORAGE } from "./storeToken";

export default async () => {
  const userInfo = await Cookies.get(TOKEN_STORAGE);

  if (userInfo === null || userInfo === undefined) {
    return;
  }

  const parsedInfo = await JSON.parse(userInfo);

  let res;
  try {
    res = await Parse.User.hydrate(parsedInfo);
  } catch (err) {}

  return res;
};
