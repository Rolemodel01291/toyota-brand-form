import { get, post } from 'axios';
import { API_URL } from '../utilities';

/**
 * Session APIs
 */
export const Session = {
  /**
   * Request a code from the server which will be emailed to the user.
   *
   * This function should be called asynchronously.
   *
   * @param brand brand or provider-id of website
   * @param email user's email
   * @returns promise resolving when request has been sent.
   */
  requestCode: (brand, email) =>
    post(`${API_URL}/${brand}/${encodeURIComponent(email)}`),

  /**
   * Request token from server, given an email and code.
   *
   * @param brand brand or provider-id of website
   * @param email user's email
   * @returns promise resolving to the users token. The token should be saved
   *          in local storage so that it is passed in other requests.
   */
  requestToken: (brand, email, code) =>
    post(`${API_URL}/${brand}/${encodeURIComponent(email)}/${code}`).then(
      ({ data }) => ({
        token: data.token,
      })
    ),

  /**
   * Requests the brand information from the server, given the brand name
   * 
   * @param brand brand or provider-id of website
   * @returns promise resolving to the brands information. The information should
   *          be stored in the local storage to be used in the templated locations 
   */
  requestBrandInfo: (brand) =>
    get(`${API_URL}/${brand}`),
};
