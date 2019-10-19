import authActionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case authActionTypes.setSignInResponse:
      return {
        ...state,
        token: action.token,
        error: false
      };
    case authActionTypes.setSignInError:
      return {
        ...state,
        token: null,
        error: action.error
      };

    default:
      return state;
  }
}
