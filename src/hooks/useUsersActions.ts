import * as usersRequests from '@/services/axios/users';

const useUsersActions = () => {
    const getUsersAction = async () => {
        try {
            const { data } = await usersRequests.fetchUsers();
            return data;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        getUsersAction,
    };
};

export default useUsersActions;
