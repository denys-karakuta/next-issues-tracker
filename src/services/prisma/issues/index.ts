import prisma from '@/configs/prisma/client';

export const fetchIssuesList = () => prisma.issue.findMany();

export const fetchIssueById = (id: string) =>
    prisma.issue.findUnique({
        where: {
            id: parseInt(id),
        },
    });

export const updateIssueByIdRequest = (id: string, data) =>
    prisma.issue.update({
        where: {
            id: parseInt(id),
        },
        data,
    });
