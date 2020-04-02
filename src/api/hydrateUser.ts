import Parse from "./index";

import TokenManager from "utils/TokenManager";

export default async () => {
  const userInfo = new TokenManager().getToken();

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
