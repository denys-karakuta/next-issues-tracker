import { AxiosRequestConfig } from 'axios';
import { User } from '@prisma/client';

import api from '@/configs/axios';

export const fetchUsers = async (config?: AxiosRequestConfig) => {
    return await api.get<User[]>('v1/users', config);
};
