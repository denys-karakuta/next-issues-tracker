import React from 'react';
import Link from 'next/link';
import { Avatar, Box, DropdownMenu, Text } from '@radix-ui/themes';

import useSessionState from '@/hooks/useSessionState';

import { API_AUTH_ROUTES } from '@/constants/routing';

import Skeleton from '@/components/common/Skeleton';

const AuthStatus: React.FC = () => {
    const { isUnauthenticated, isLoading, session } = useSessionState();

    if (isLoading) {
        return <Skeleton width="2rem" height="2rem" borderRadius={100} />;
    }

    if (isUnauthenticated)
        return (
            <Link className="nav-link" href={API_AUTH_ROUTES.LOGIN}>
                Login
            </Link>
        );

    return (
        <Box>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Avatar src={session!.user!.image!} fallback="?" size="2" radius="full" className="cursor-pointer" referrerPolicy="no-referrer" />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                    <DropdownMenu.Label>
                        <Text size="2">{session!.user!.email}</Text>
                    </DropdownMenu.Label>

                    <DropdownMenu.Item>
                        <Link href={API_AUTH_ROUTES.LOGOUT}>Log out</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Box>
    );
};

export default AuthStatus;
