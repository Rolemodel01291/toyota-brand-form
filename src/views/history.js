import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../state/store';

const browserHistory = createBrowserHistory();

export default syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.routerReducer,
});
