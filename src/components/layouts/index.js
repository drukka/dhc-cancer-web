import PropTypes from "prop-types";
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Loadable from "react-loadable";
import Loader from '../../components/modules/loader';

import Router from "../Router";
import App from "../App";

const Error404 = Loadable({
  loader: () => import('../pages/error/404' /* webpackChunkName: "pages.error.404, webpackPrefetch: true" */),
  loading: Loader
});

const ErrorBoundary = Loadable({
  loader: () => import('../../components/modules/errorBoundary' /* webpackChunkName: "errorboundary, webpackPrefetch: true" */),
  loading: Loader
});


export const AUTHENTICATION_LAYOUT = 'authenticationLayout';
export const ADMIN_LAYOUT = 'adminLayout';

class Layout extends Component {

  authenticateLayoutRender() {
    const {pages} = this.props;

    const AuthenticationLayout = Loadable({
      loader: () => import('./authenticationLayout/Layout' /* webpackChunkName: "layout.authenticationLayout, webpackPrefetch: true" */),
      loading: Loader
    });

    return <AuthenticationLayout key={new Date()}>
      <Switch>
        {Object.keys(pages).filter(page => pages[page].layout === AUTHENTICATION_LAYOUT).map(pageKey => Router.generateRoute(pageKey))}
        <Route component={Error404}/>
      </Switch>
    </AuthenticationLayout>;
  }

  adminLayoutRender() {
    const {pages} = this.props;

    const AdminLayout = Loadable({
      loader: () => import('./adminLayout/Layout' /* webpackChunkName: "layout.adminLayout" */),
      loading: Loader
    });

    return <AdminLayout key={new Date()}>
      <Switch>
        {Object.keys(pages).filter(page => pages[page].layout === ADMIN_LAYOUT).map(pageKey => Router.generateRoute(pageKey))}
        <Route component={Error404}/>
      </Switch>
    </AdminLayout>;
  }

  render() {
    return <ErrorBoundary key={'LayoutErrorBoundary'}>
      {App.isLoggedIn() ? this.adminLayoutRender() : this.authenticateLayoutRender()}
    </ErrorBoundary>;
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  pages: PropTypes.object,
  user: PropTypes.object
};

export default Layout;
