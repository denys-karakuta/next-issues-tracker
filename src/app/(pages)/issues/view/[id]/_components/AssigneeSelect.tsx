'use client';

import React from 'react';
import { Select } from '@radix-ui/themes';

const AssigneeSelect: React.FC = () => {
    return (
        <Select.Root size="3">
            <Select.Trigger placeholder="Assign..." />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>
                    <Select.Item value="1">User</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
};

export default AssigneeSelect;
