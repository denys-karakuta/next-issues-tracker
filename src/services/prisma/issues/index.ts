import { Prisma } from '@prisma/client';

import prisma from '@/configs/prisma/client';

export const fetchIssuesList = (args?: Prisma.IssueFindManyArgs) => {
    return prisma.issue.findMany(args);
};

export const fetchIssueById = (id: string) => {
    return prisma.issue.findUnique({
        where: {
            id: parseInt(id),
        },
    });
};

export const fetchIssuesCount = (args?: Prisma.IssueCountArgs) => {
    return prisma.issue.count(args);
};

export const updateIssueByIdRequest = (id: string, data) => {
    return prisma.issue.update({
        where: {
            id: parseInt(id),
        },
        data,
    });
};

export const createIssueRequest = (data) => {
    return prisma.issue.create({ data });
};

export const deleteIssueRequest = (id: string) => {
    return prisma.issue.delete({
        where: {
            id: parseInt(id),
        },
    });
};
