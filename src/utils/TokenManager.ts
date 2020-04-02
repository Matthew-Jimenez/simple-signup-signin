import Cookies from "js-cookie";

class TokenManager {
  private tokenKey = "demo-app:session-token";

  public clearToken() {
    try {
      Cookies.remove(this.tokenKey);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  public storeToken(sessionToken: string) {
    try {
      Cookies.set(this.tokenKey, sessionToken);

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
