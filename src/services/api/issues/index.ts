import { AxiosRequestConfig } from 'axios';

import api from '@/configs/axios';

export const createIssueRequest = async ({ requestBody }, config?: AxiosRequestConfig) => {
    return await api.post('v1/issues', requestBody, config);
};

export const updateIssueRequest = async ({ id, requestBody }, config?: AxiosRequestConfig) => {
    return await api.patch(`v1/issues/${id}`, requestBody, config);
};

export const deleteIssueRequest = async ({ id }, config?: AxiosRequestConfig) => {
    return await api.delete(`v1/issues/${id}`, config);
};
