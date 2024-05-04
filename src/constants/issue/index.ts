import { Status } from '@prisma/client';

export const ISSUE_STATUS = {
    IN_PROGRESS: { label: 'In Progress', color: 'violet' },
    CLOSED: { label: 'Closed', color: 'green' },
    OPEN: { label: 'Open', color: 'red' },
} as const;

type IssuesFilterStatus = { label: string; value?: Status };

export const ISSUES_FILTER_OPTIONS: IssuesFilterStatus[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
];
