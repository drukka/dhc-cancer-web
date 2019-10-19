import Loadable from "react-loadable";
import Loader from '../../components/modules/loader';
import {ADMIN_LAYOUT} from "../../components/layouts";
import React from "react";
import {Redirect} from "react-router-dom";

export default {
  MainRedirect: {
    link: '/',
    exact: true,
    layout: ADMIN_LAYOUT,
    render: <Redirect to={'/main'}/>
  },
  Main: {
    title: 'main.title',
    link: '/main',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/main' /* webpackChunkName: "pages.main.index" */),
      loading: Loader
    })
  },
  Other: {
    title: 'other.title',
    link: '/other',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/other' /* webpackChunkName: "pages.other.index" */),
      loading: Loader
    })
  }
}
