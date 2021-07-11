import axios from 'axios';
import {
  API_URL,
  AUTHORISATION_TOKEN_STORAGE_KEY,
} from '../utilities/constants';

const apiClient = axios.create({
  baseURL: API_URL,
});

/**
 * Inject the token from local storage if it exists, otherwise continue
 * without any Auth token.
 */
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await localStorage.getItem(AUTHORISATION_TOKEN_STORAGE_KEY);
      return {
        ...config,
        headers: {
          ...config.headers,
          'X-Auth-Token': token || undefined,
        },
      };
    } catch (e) {
      // no token in local storage
      return config;
    }
  },
  (error) => Promise.reject(error)
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
