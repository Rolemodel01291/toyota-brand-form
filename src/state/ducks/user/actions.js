// import axios from "axios";
import * as types from './types';

export const userLoggedIn = (formData, dispatch) =>
  dispatch({
    type: types.SIGN_IN,
    formData,
  });

export const setEmail = (email, dispatch) =>
  dispatch({
    type: types.SET_EMAIL,
    payload: email,
  });

export const setFormSection = (formSection, dispatch) =>
  dispatch({
    type: types.SET_FORM_SECTION,
    formSection,
  });

export const isContractNumbers = (payload, dispatch) =>
  dispatch({
    type: types.IS_CONTRACT_NUMBER,
    payload: payload,
  });

export const isRegisterNumbers = (payload, dispatch) =>
  dispatch({
    type: types.IS_REGISTER_NUMBER,
    payload: payload,
  });

export const setContractNumber = (payload, dispatch) =>
  dispatch({
    type: types.SET_CONTRACT_NUMBER,
    payload: payload,
  });

export const setBeginData = (userName, dispatch) =>
  dispatch({
    type: types.SET_BEGIN_DATA,
    payload: userName,
  });

export const submitForm = (dispatch) => dispatch({ type: types.SUBMIT_FORM });
