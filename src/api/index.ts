import Parse from "parse";
import getEnvVar from "../utils/getEnvVar";

const serverURL = getEnvVar("REACT_APP_PARSE_SERVER_URL");
const applicationId = getEnvVar("REACT_APP_PARSE_APPLICATION_ID");
const javascriptKey = getEnvVar("REACT_APP_PARSE_JAVASCRIPT_KEY");

if (!(serverURL && applicationId && javascriptKey)) {
  throw new Error("");
}

Parse.serverURL = serverURL;

Parse.initialize(applicationId, javascriptKey);

export default Parse;
