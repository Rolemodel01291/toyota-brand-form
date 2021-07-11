import { SET_EMAIL, SIGN_IN, SUBMIT_FORM } from '../ducks/user/types';
import { trackEvent, trackPageView } from '@redux-beacon/google-analytics';
import { LOCATION_CHANGE } from 'react-router-redux';
import { removeTrailingAndLeadingSlash } from '../utils/';

export default {
  [SET_EMAIL]: trackEvent((action, prevState, newState) => ({
    category: newState.brand.brand,
    action: 'Email Submitted',
  })),
  [SIGN_IN]: trackEvent((action, prevState, newState) => ({
    category: newState.brand.brand,
    action: 'Form Started',
  })),
  [SUBMIT_FORM]: trackEvent((action, prevState, newState) => ({
    category: newState.brand.brand,
    action: 'Form Completed',
  })),
  [LOCATION_CHANGE]: trackPageView((action) => ({
    title: removeTrailingAndLeadingSlash(action.payload.pathname),
    location: window.location.hostname,
    page: action.payload.pathname,
  })),
};
