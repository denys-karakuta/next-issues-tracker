import { useQuery } from '@tanstack/react-query';

import useUsersActions from './useUsersActions';

const useUsersState = () => {
    const { getUsersAction } = useUsersActions();

    const usersQuery = useQuery<any>({
        queryKey: ['users'],
        queryFn: getUsersAction,
        staleTime: 60 * 1000, // 60s
        retry: 3,
    });

    return {
        usersQuery,
    };
};

export default useUsersState;
