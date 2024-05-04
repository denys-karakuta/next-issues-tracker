'use client';

import React from 'react';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

import { ISSUES_FILTER_OPTIONS } from '@/constants/issue';

const IssuesStatusFilter: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleValueChange = (status: string) => {
        const params = new URLSearchParams();

        if (status) {
            params.append('status', status === 'default' ? '' : status);
        }

        if (searchParams.get('orderBy')) {
            params.append('orderBy', searchParams.get('orderBy')!);
        }

        const query = params.size ? '?' + params.toString() : '';

        router.push('/issues/list' + query);
    };

    const renderIssuesFilterOptions = ISSUES_FILTER_OPTIONS.map((status) => (
        <Select.Item key={status.value} value={status.value || 'default'}>
            {status.label}
        </Select.Item>
    ));

    return (
        <Select.Root defaultValue={searchParams.get('status') || ''} onValueChange={handleValueChange}>
            <Select.Trigger placeholder="Filter by status..." />

            <Select.Content>{renderIssuesFilterOptions}</Select.Content>
        </Select.Root>
    );
};

export default IssuesStatusFilter;
