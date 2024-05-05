import { Status } from '@prisma/client';

export type SearchIssuesQuery = {
    orderBy: 'status' | 'title' | 'createdAt';
    status: Status;
    page: string;
};
