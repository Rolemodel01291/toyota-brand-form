import * as types from './types';

export const setBrandInfo = (brandInfo, dispatch) =>
    dispatch({
        type: types.SET_BRAND_INFO,
        brandInfo,
    });