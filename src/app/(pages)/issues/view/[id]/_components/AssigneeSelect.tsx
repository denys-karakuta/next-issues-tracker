'use client';

import React, { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { Select } from '@radix-ui/themes';

import useUsersActions from '@/hooks/useUsersActions';

const AssigneeSelect: React.FC = () => {
    const { getUsersAction } = useUsersActions();
    const [users, setUsers] = useState<User>([]);

    useEffect(() => {
        getUsersAction().then((data) => setUsers(data));
    }, []);

    const renderUsers = users?.map((user) => (
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
