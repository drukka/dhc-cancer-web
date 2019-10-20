/* use strict */
import loginPageGroup from './pages/login';
import mainPageGroup from './pages/main';
import patientsPageGroup from './pages/patients';

export const pages = Object.freeze({
  ...loginPageGroup,
  ...mainPageGroup,
  ...patientsPageGroup
});
