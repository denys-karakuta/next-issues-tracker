import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import handleAxiosError from './utils/errorHandler';

// Default config for the axios instance
const axiosParams = {
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/',
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

// Interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        handleAxiosError(error);
        return Promise.reject(error);
    },
);

// Main api function
const api = (axios: AxiosInstance) => {
    return {
        patch: <T>(url: string, body?: unknown, config: AxiosRequestConfig = {}) => axios.patch<T>(url, body, config),
        post: <T>(url: string, body?: unknown, config: AxiosRequestConfig = {}) => axios.post<T>(url, body, config),
        put: <T>(url: string, body?: unknown, config: AxiosRequestConfig = {}) => axios.put<T>(url, body, config),
        delete: <T>(url: string, config: AxiosRequestConfig = {}) => axios.delete<T>(url, config),
        get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),
    };
};

export default api(axiosInstance);
