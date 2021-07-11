import { get, post, put, destroy } from './base.js';

export const Files = {
  listAll: (submissionId) =>
    get(`/current-applicant/forms/${submissionId}/files`).then(
      ({ data }) => data
    ),
  get: (submissionId, id) =>
    get(`/current-applicant/forms/${submissionId}/files/${id}`).then(
      ({ data }) => data
    ),
  upload: (submissionId, formData, onUploadProgress) =>
    post(`/current-applicant/forms/${submissionId}/files`, formData, {
      onUploadProgress,
    }).then(({ data }) => data),
  download: (submissionId, id, filename) =>
    put(
      `/current-applicant/forms/${submissionId}/files/${id}/${encodeURIComponent(
        filename
      )}`
    ).then(({ data }) => data),
  destroy: (submissionId, id) =>
    destroy(`/current-applicant/forms/${submissionId}/files/${id}`).then(
      ({ data }) => data
    ),
};
