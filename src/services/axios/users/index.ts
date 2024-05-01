import { AxiosRequestConfig } from 'axios';

import api from '@/configs/axios';

export const fetchUsers = async (config?: AxiosRequestConfig) => {
    return await api.get('v1/users', config);
};
