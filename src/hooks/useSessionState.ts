import { useSession } from 'next-auth/react';

const useSessionState = () => {
    const { status, data: session } = useSession();

    return {
        isUnauthenticated: status === 'unauthenticated',
        isAuthenticated: status === 'authenticated',
        isLoading: status === 'loading',
        session,
        status,
    };
};

export default useSessionState;
