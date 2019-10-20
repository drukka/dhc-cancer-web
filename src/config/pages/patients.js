import {ADMIN_LAYOUT} from "../../components/layouts";
import Loadable from "react-loadable";
import Loader from "../../components/modules/loader";

export default {
  Patients: {
    title: 'patients.title',
    link: '/patients',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/patients/index' /* webpackChunkName: "pages.patient.index" */),
      loading: Loader
    })
  },
  PatientsDetails: {
    title: 'patients.title',
    link: '/patients/:patientId',
    exact: true,
    layout: ADMIN_LAYOUT,
    component: Loadable({
      loader: () => import('../../components/pages/patients/details' /* webpackChunkName: "pages.patient.details" */),
      loading: Loader
    })
  }
}
