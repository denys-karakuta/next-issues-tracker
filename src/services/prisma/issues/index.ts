import prisma from '@/configs/prisma/client';

export const fetchIssuesList = () => {
    return prisma.issue.findMany();
};

export const fetchIssueById = (id: string) => {
    return prisma.issue.findUnique({
        where: {
            id: parseInt(id),
        },
    });
};

export const updateIssueByIdRequest = (id: string, data) => {
    return prisma.issue.update({
        where: {
            id: parseInt(id),
        },
        data,
    });
};
