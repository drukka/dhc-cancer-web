import userNetworking from "../networking/userNetworking";
import userActionTypes from "../constants/actionTypes";

const userActions = {
  signUpAction: (formData = {}) => {
    return (dispatch) => {
      return userNetworking.signUpRequest(formData)
        .then(response => !response.ok || !response.body ? false : response)
        .then(response => dispatch({type: userActionTypes.setSignUpResponse, data: response.body}))
        .catch(response => dispatch({
          type: userActionTypes.setSignUpError,
          error: {status: response.status, message: response.body}
        }));
    };
  }
};

export default userActions;
