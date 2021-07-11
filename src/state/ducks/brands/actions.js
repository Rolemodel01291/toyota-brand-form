import * as types from './types';

export const setBrand = (brand, dispatch) =>
  dispatch({
    type: types.SET_BRAND,
    brand,
  });
