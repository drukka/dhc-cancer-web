import React from "react";
import {Redirect} from "react-router-dom";
import Loadable from "react-loadable";
import Loader from '../../components/modules/loader';
import {AUTHENTICATION_LAYOUT} from "../../components/layouts";

export default {
  LoginRedirect: {
    link: '/',
    exact: true,
    layout: AUTHENTICATION_LAYOUT,
    render: <Redirect to={'/login'}/>
  },
  Login: {
    title: 'login.title',
    link: '/login',
    exact: true,
    layout: AUTHENTICATION_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/login' /* webpackChunkName: "pages.login.index, webpackPrefetch: true" */),
      loading: Loader
    })
  },
  Signup: {
    title: 'signup.title',
    link: '/signup',
    exact: true,
    layout: AUTHENTICATION_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/login/signup' /* webpackChunkName: "pages.login.signup" */),
      loading: Loader
    })
  }
}
