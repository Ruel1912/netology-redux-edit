import { combineReducers, compose, legacy_createStore } from 'redux';
import serviceListReducer from './reducers/serviceListReducer';
import serviceAddReducer from './reducers/serviceAddReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
  combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
  }),
  compose(ReactReduxDevTools)
)

export default store