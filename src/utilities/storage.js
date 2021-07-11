import decode from 'jwt-decode';
import { Forms } from '../api';
import {
  FORM_PERSIST_KEY,
  FORM_ID_STORAGE_KEY,
  AUTHORISATION_TOKEN_STORAGE_KEY,
  brandFromHost,
} from '../utilities';

export const formDataFromStorage = async () => {
  const token = await localStorage.getItem(AUTHORISATION_TOKEN_STORAGE_KEY);
  if (!token) return { hydrating: false };
  const formId = await localStorage.getItem(FORM_ID_STORAGE_KEY);
  let form;
  const hostBrand = brandFromHost(window.location.hostname);

  if (formId) {
    // @todo check for 404 error
    const fetchedForm = await Forms.get(formId).catch(() => undefined);
    if (decode(fetchedForm.formData.token).brand === hostBrand) {
      form = fetchedForm;
    }
  }

  if (!form) {
    form = await Forms.getCurrent(hostBrand);
  }
  if (!form) {
    form = await Forms.create({ token });
  }

  const data = { token, hydrating: false };

  if (form.id) {
    localStorage.setItem(FORM_ID_STORAGE_KEY, form.id);
    const { formData, submissionStatus } = form;
    return {
      ...data,
      ...formData,
      submissionStatus,
      id: form.id,
    };
  } else {
    return data;
  }
};

export const storage = {
  async getItem() {
    const formData = await formDataFromStorage();

    return formData
      ? JSON.stringify({ [FORM_PERSIST_KEY]: JSON.stringify(formData) })
      : null;
  },

  async setItem(key, state) {
    const { user } = JSON.parse(state);
    const token = await localStorage.getItem(AUTHORISATION_TOKEN_STORAGE_KEY);
    const formId = await localStorage.getItem(FORM_ID_STORAGE_KEY);
    return user && token && formId && Forms.update(formId, JSON.parse(user));
  },

  async removeItem(key) {
    console.error('Cannot remove form');
  },
};
