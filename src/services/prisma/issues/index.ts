import prisma from '@/configs/prisma/client';

export const fetchManyIssues = () => prisma.issue.findMany();

export const fetchIssueById = (id: string) =>
    prisma.issue.findUnique({
        where: {
            id: parseInt(id),
        },
    });
