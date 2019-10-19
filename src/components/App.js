import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import Swagger from 'swagger-client';
import detectBrowserLanguage from 'detect-browser-language';
import Router from './Router';
import settings from "../config/settings";
import 'semantic-ui-css/semantic.min.css';
import './App.scss'
import {hot} from "react-hot-loader";
import Observables from "../utils/observables";
//import '../utils/serializeObject';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swaggerClientLoaded: false,
      renderMathRandom: Math.random()
    };

    Observables.register('reloadApp', () => this.setState({renderMathRandom: Math.random()}))
  }

  static setLanguage(languageCode = settings.Localize.defaultLanguageCode) {
    return localStorage.setItem('Language', languageCode);
  }

  static getLanguage() {
    return localStorage.getItem('Language') || settings.Localize.defaultLanguageCode;
  }

  static isLoggedIn() {
    return !!localStorage.getItem(settings.API.headers.Authentication.localStorageKey);
  }

  setBrowserLanguage() {
    if (!localStorage.getItem('Language')) {
      const setLanguageCode = detectBrowserLanguage().substring(0, 2) || settings.Localize.defaultLanguageCode;
      localStorage.setItem('Language', setLanguageCode);
    }
  }

  getAuthenticationToken() {
    if (!localStorage.getItem(settings.API.headers.Authentication.localStorageKey))
      return false;
    return settings.API.headers.Authentication.prefix + localStorage.getItem(settings.API.headers.Authentication.localStorageKey);
  }

  async componentDidMount() {
    this.setBrowserLanguage();
    await Swagger({
      url: settings.API.host,
      requestInterceptor: request => {

        request.headers['Content-Type'] = 'application/json';
        request.headers['Accept-Language'] = App.getLanguage();

        if (App.isLoggedIn())
          request.headers[settings.API.headers.Authentication.name] = this.getAuthenticationToken();

        return request;

      }
    })
      .then(swaggerClient => {
        window.debug.log("Swagger client loaded: ", swaggerClient);
        window.swaggerClient = swaggerClient;
        this.setState({swaggerClientLoaded: true})
      }).catch(error => {
        window.debug.error("Swagger client load error: ", error);
        return error;
      });
  }

  render() {
    const {store, history} = this.props;
    const {swaggerClientLoaded} = this.state;

    return (
      <Provider store={store}>
        {swaggerClientLoaded && <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>}
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default hot(module)(App);
