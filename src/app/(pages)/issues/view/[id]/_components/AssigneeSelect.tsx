'use client';

import React from 'react';
import { Select } from '@radix-ui/themes';

import useUsersState from '@/hooks/useUsersState';

import Skeleton from '@/components/common/Skeleton';

const AssigneeSelect: React.FC = () => {
    const { usersQuery } = useUsersState();

    if (usersQuery.isLoading) {
        return <Skeleton height="40px" />;
    }

    if (usersQuery.error) {
        return null;
    }

    const renderUsers = usersQuery.data?.map((user) => (
        <Select.Item key={user.id} value={user.id}>
            {user.name}
        </Select.Item>
    ));

    return (
        <Select.Root size="3">
            <Select.Trigger placeholder="Assign..." />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>
                    {renderUsers}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
};

export default AssigneeSelect;
