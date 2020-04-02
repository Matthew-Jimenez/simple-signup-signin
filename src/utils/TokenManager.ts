import Cookies from "js-cookie";
import getEnvVar from "./getEnvVar";

const cookiesDomain = getEnvVar("REACT_APP_COOKIES_DOMAIN");

class TokenManager {
  private tokenKey = "demo-app:session-token";

  private tokenDomain = { path: "", domain: cookiesDomain };

  public clearToken() {
    try {
      Cookies.remove(this.tokenKey, this.tokenDomain);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  public storeToken(sessionToken: string) {
    try {
      Cookies.set(this.tokenKey, sessionToken, this.tokenDomain);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  public getToken() {
    try {
      return Cookies.get(this.tokenKey);
    } catch (error) {
      return error;
    }
  }
}

export default TokenManager;
