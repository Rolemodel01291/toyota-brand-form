import createReducer from '../../utils/createReducer';
import * as types from './types';

/**
 * The initial state of the brandInfo state is set to the toyota-finance
 * information. This is to match the brandName default state also being
 * toyota-finance.
 */
const initialState = {
  brandInfo: {
    name: '',
    config: {
      hardshipEmail: '',
      hardshipPhone: '',
      complaintsEmail: '',
      complaintsPhone: '',
      privacyPolicyUrl: '',
      paperFormUrl: '',
    },
  },
};

const brandInfoReducer = createReducer(initialState)({
  [types.SET_BRAND_INFO]: (state, action) => ({
    ...state,
    brandInfo: action.brandInfo,
  }),
});

export default brandInfoReducer;
