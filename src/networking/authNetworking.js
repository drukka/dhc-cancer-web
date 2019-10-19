const authNetworking = {
  signInRequest: async (email, password) => {
    return window.swaggerClient.apis.auth.signIn({}, {requestBody: {email: email, password: password}});
  }
};

export default authNetworking;
