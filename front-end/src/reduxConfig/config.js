import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../saga/index";
import { IntlActions } from "react-redux-multilingual";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  store.dispatch(IntlActions.setLocale("en"));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
