import { AxiosRequestConfig } from 'axios';

import api from '@/configs/axios';

export const createNewIssueRequest = async ({ requestBody }, config?: AxiosRequestConfig) => {
    return await api.post('v1/issues/create', requestBody, config);
};
