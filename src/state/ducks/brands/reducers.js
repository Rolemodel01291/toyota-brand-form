import { B_TOYOTA_FINANCE } from '../../../utilities/';
import createReducer from '../../utils/createReducer';
import * as types from './types';

const initialState = {
  brand: B_TOYOTA_FINANCE,
};

const brandReducer = createReducer(initialState)({
  [types.SET_BRAND]: (state, action) => ({
    ...state,
    brand: action.brand,
  }),
});

export default brandReducer;
