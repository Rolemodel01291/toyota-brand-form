import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createMiddleware } from 'redux-beacon';
import GoogleAnalytics from '@redux-beacon/google-analytics';
import * as reducers from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LOG_OUT } from './ducks/user/types';
import { persistStore, persistReducer } from 'redux-persist';
import { FORM_PERSIST_KEY } from '../utilities';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { storage } from '../utilities/storage';
import analyticsMap from './analytics';
// import storage from 'redux-persist/lib/storage';

const MiddleWares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  MiddleWares.push(logger);
}

MiddleWares.push(createMiddleware(analyticsMap, GoogleAnalytics()));

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) state = undefined;
  return combineReducers({
    ...reducers,
    routerReducer,
  })(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [FORM_PERSIST_KEY],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...MiddleWares))
);

export const persistor = persistStore(store);
