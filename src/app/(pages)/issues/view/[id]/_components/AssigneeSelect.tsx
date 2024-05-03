'use client';

import React from 'react';
import { Select } from '@radix-ui/themes';
import { Issue, User } from '@prisma/client';

import useIssuesActions from '@/hooks/useIssuesActions';
import useUsersState from '@/hooks/useUsersState';

import Skeleton from '@/components/common/Skeleton';

type OwnProps = {
    issue: Issue;
};

const AssigneeSelect: React.FC<OwnProps> = (props) => {
    const { issue } = props;

    const { users, isError, isLoading } = useUsersState();
    const { patchIssueAction } = useIssuesActions();

    if (isLoading) {
        return <Skeleton height="40px" />;
    }

    if (isError) {
        return null;
    }

    const handleValueChange = (userId: User['id']) => {
        patchIssueAction(issue.id, { assignedToUserId: userId === 'unassign' ? null : userId });
    };

    const renderUsers = users?.map((user) => (
        <Select.Item key={user.id} value={user.id}>
            {user.name}
        </Select.Item>
    ));

    return (
        <Select.Root defaultValue={issue.assignedToUserId || 'unassign'} size="3" onValueChange={handleValueChange}>
            <Select.Trigger placeholder="Assign..." />

            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>

                    <Select.Item value="unassign">Unassigned</Select.Item>

                    {renderUsers}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
};

export default AssigneeSelect;
