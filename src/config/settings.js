export default Object.freeze({
  API: {
    host: "https://development.api.skeleton.proxy.drukka.hu/api-docs",
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
  }
});
