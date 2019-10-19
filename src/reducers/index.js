import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {connectRouter} from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authReducer
});

export default rootReducer;
