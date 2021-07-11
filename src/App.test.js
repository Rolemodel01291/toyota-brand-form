import React from 'react';
import { render } from '@testing-library/react';
import App from './views';
import { Provider } from 'react-redux';
import { store } from './state/store';

test('App renders in document', () => {
  const { baseElement } = render(<Provider store={store}><App /></Provider>);
  expect(baseElement).toBeInTheDocument();
});
