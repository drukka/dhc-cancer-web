export default Object.freeze({
  API: {
    host: 'http://192.168.10.247:8001/api-docs',
    headers: {
      Authentication: {
        name: 'Authentication',
        localStorageKey: 'AuthenticationToken',
        prefix: 'Bearer '
      }
    }
  },
  Localize: {
    defaultLanguageCode: 'en'
  },
  App: {
    name: 'Cancell'
  }
});
