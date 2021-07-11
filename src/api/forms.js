import { get, post, put } from './base.js';
import decode from 'jwt-decode';

export const Forms = {
  listAll: () => get('/current-applicant/forms'),
  get: (formId) =>
    get(`/current-applicant/forms/${formId}`).then(({ data }) => data),
  getCurrent: async (brand) =>
    get('/current-applicant/forms').then(({ data }) =>
      data.find((form) => brand === decode(form.formData.token).brand)
    ),
  create: (formData) =>
    post('/current-applicant/forms', { formData }).then(({ data }) => data),
  update: (id, formData) => put(`/current-applicant/forms/${id}`, { formData }),
  submit: (id) => post(`/current-applicant/forms/${id}/submit`),
};
