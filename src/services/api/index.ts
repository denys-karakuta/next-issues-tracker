import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/';

export const createNewIssueRequest = async ({ requestBody }, config?: AxiosRequestConfig) => {
    return await axios.post('v1/issues/create', requestBody, config);
};
