import {createStore, combineReducers, applyMiddleware} from "redux";
//import logger from "redux-logger";
//import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import kmitReducer from "./kmitReducer.js";
const store = combineReducers({
      kmit : kmitReducer
});
const createStorewithMiddleware = applyMiddleware(promiseMiddleware())(createStore);
export default createStorewithMiddleware(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
