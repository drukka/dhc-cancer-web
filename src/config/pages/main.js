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
    render: <Redirect to={'/home'}/>
  },
  Home: {
    title: 'home.title',
    link: '/home',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/home' /* webpackChunkName: "pages.home.index" */),
      loading: Loader
    })
  },
  Patients: {
    title: 'patients.title',
    link: '/patients',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/patients' /* webpackChunkName: "pages.patient.index" */),
      loading: Loader
    })
  }
}
