const userNetworking = {
  signUpRequest: (body = {}) => {
    return window.swaggerClient.apis.user.signUp({}, {requestBody: body});
  }
};

export default userNetworking;
