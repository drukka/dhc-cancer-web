import userActionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.user, action) {
  switch (action.type) {
    case userActionTypes.setSignInResponse:
      return {
        ...state,
        user: {
          ...action.data.user
        }
      };
    case userActionTypes.setSignInError:
      return {
        ...state,
        user: null,
        error: action.error
      };

    default:
      return state;
  }
}
