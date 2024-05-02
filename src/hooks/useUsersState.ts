import { User } from '@prisma/client';
import { QueryFunction, useQuery } from '@tanstack/react-query';

import useUsersActions from './useUsersActions';

const useUsersState = () => {
    const { getUsersAction } = useUsersActions();

    const {
        data: users,
        isError,
        isLoading,
    } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsersAction as QueryFunction<User[]>,
        staleTime: 60 * 1000, // 60s
        retry: 3,
    });

    return { users, isError, isLoading };
};

export default useUsersState;
