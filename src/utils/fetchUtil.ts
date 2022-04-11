import {WEATHER_API_BASE_URL, WEATHER_API_KEY} from '@env';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import moment from 'moment';

const requestLoggingInterceptor = (_config: AxiosRequestConfig) => {
  console.groupCollapsed(
    `[${moment().format(
      'HH:mm:ss.SSS',
    )}][Request][${_config.method?.toUpperCase()}] ${_config.baseURL}${
      _config.url
    }`,
  );
  const {headers, params, data} = _config;
  console.log('[headers]', headers);
  console.log('[params]', params);
  console.log('[data]', data);
  console.groupEnd();
  return _config;
};

const responseLoggingInterceptor = (response: AxiosResponse) => {
  console.groupCollapsed(
    `[${moment().format(
      'HH:mm:ss.SSS',
    )}][Response][${response.config.method?.toUpperCase()}][${
      response.status
    }] ${response.config.baseURL}${response.config.url}`,
  );
  console.log('[data]', response.data);
  console.groupEnd();
  return response;
};

export const isAxiosError = (value: any): value is AxiosError =>
  value?.isAxiosError;

const errorLoggingInterceptor = (error: any) => {
  if (isAxiosError(error) && error.response) {
    error.response = responseLoggingInterceptor(error.response);
  }
  throw error;
};
const TIME_OUT_MILLISECOND = 60_1000;

const axiosFetch = axios.create({
  baseURL: '',
  timeout: TIME_OUT_MILLISECOND,
});
if (__DEV__) {
  axiosFetch.interceptors.request.use(
    requestLoggingInterceptor,
    errorLoggingInterceptor,
  );

  axiosFetch.interceptors.response.use(
    responseLoggingInterceptor,
    errorLoggingInterceptor,
  );
}

/**
 * weather api 데이터 요청
 *
 * @param path API Method
 * @param query Request Parameters
 *
 * @see http://www.weatherapi.com/docs/
 */
export const getWeatherFetch = (
  path: string,
  query: {
    q: string;
    [key: string]: any;
  },
) => {
  const queryString = `?key=${WEATHER_API_KEY}${
    query && Object.keys(query).length !== 0
      ? `&${Object.entries(query)
          .map(e => e.join('='))
          .join('&')}`
      : ''
  }`;

  const url =
    (path.slice(-1) !== '/' ? path : path.slice(0, path.length - 1)) +
    queryString;

  return axiosFetch.get(url, {
    baseURL: WEATHER_API_BASE_URL,
  });
};

export default axiosFetch;
