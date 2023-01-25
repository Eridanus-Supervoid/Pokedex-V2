import axios from 'axios';

export const AxiosInterceotor = () => {
  axios.interceptors.request.use((request) => {
    console.log('Starting Request', request);
    return request;
  });
};
