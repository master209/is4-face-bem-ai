// import {StatusCodes} from 'http-status-codes';
// import {toast} from 'react-toastify';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  // AxiosResponse,
  // AxiosError
} from 'axios';

import {getToken} from './token';

// const {BAD_REQUEST, UNAUTHORIZED, NOT_FOUND} = StatusCodes;

// const shouldDisplayError = (response: AxiosResponse) => [BAD_REQUEST, UNAUTHORIZED, NOT_FOUND].includes(response.status);

export const BACKEND_URL = 'http://api.is4.gals-telecom.ru'; // -devel
const REQUEST_TIMEOUT = 5000;

interface RequestHeaders {
  'Content-Type': string;
  'Authorization': string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        const headers: RequestHeaders = {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${token}`
        };

        config.headers = headers;
      }

      return config;
    },
  );

  /*
    api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response && shouldDisplayError(error.response)) {
          toast.warn(error.response.data.error);
        }

        throw error;
      }
    );
  */

  return api;
};
