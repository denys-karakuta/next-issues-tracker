import { AxiosRequestConfig } from 'axios';

import api from '@/configs/axios';

export const createIssueRequest = async ({ requestBody }, config?: AxiosRequestConfig) => {
    return await api.post('v1/issues/create', requestBody, config);
};

export const updateIssueRequest = async ({ id, requestBody }, config?: AxiosRequestConfig) => {
    return await api.patch(`v1/issues/${id}`, requestBody, config);
};
