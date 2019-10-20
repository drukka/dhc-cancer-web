export default Object.freeze({
  API: {
    host: 'http://192.168.10.247:8000/api-docs',
    headers: {
      Authentication: {
        name: 'Authorization',
        localStorageKey: 'AuthenticationToken',
        prefix: 'Bearer '
      }
    },
    params: {
      list: {
        itemsPerPage: 5
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
