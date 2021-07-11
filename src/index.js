import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './state/store';
import './styles/main.scss';
import App from './views';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
