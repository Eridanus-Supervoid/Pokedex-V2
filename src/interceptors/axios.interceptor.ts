import { API_URL } from '@/services';
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig as IAxiosRequestConfig,
} from 'axios';

const onRequest = (config: IAxiosRequestConfig): IAxiosRequestConfig => {
  // console.info('[request]', config);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(
    `Response from: ${response.config.url?.replace(API_URL, '')}, Status:${
      response.status
    }`,
    response.data
  );
  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
