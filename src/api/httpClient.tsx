import axios from 'axios';

export const API_URL = '/api';

const httpClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.request?.responseURL?.includes('/')) {
        window.location.replace('/');
      }
    }
    return Promise.reject(error);
  }
);

export { httpClient };
