/* use strict */
import loginPageGroup from './pages/login';
import mainPageGroup from './pages/main';

export const pages = Object.freeze({
  ...loginPageGroup,
  ...mainPageGroup
});
