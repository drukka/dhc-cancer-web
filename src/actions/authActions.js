import authNetworking from "../networking/authNetworking";
import authActionTypes from "../constants/actionTypes";
import settings from "../config/settings";
import LoginRequestResponse from "../models/responses/LoginRequest.response";

const authActions = {
  signInAction: (email, password) => {
    return (dispatch) => {
      return authNetworking.signInRequest(email, password)
        .then(response => !response.ok || !response.body ? false : response)
        .then(response => LoginRequestResponse.parse(response.body))
        .then(response => localStorage.setItem(settings.API.headers.Authentication.localStorageKey, response.token))
        .then(response => dispatch({type: authActionTypes.setSignInResponse, static: name, data: response}))
        .catch(() => localStorage.removeItem(settings.API.headers.Authentication.localStorageKey))
        .catch(response => {
          console.error('Authentication error:', response);
          dispatch({
            type: authActionTypes.setSignInError,
            error: {status: response.status, message: response.body}
          })
        });
    };
  }
};

export default authActions;
