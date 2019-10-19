const authActionTypes = {
  setSignInResponse: 'auth.setSignInReponse',
  setSignInError: 'auth.setSignInError'
};

const userActionTypes = {
  setSignUpResponse: 'user.setSignUpReponse',
  setSignUpError: 'auth.setSignUpError'
};

export default {
  ...authActionTypes,
  ...userActionTypes
};
