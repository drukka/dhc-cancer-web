import Model from "js-model";
import User from "../User.model";

let LoginRequestResponse = new Model({
  user: User, // User object
  token: '' // valid JWT token
});

export default LoginRequestResponse;