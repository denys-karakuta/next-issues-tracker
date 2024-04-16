import prisma from '@/configs/prisma/client';

export const fetchManyIssues = () => prisma.issue.findMany();
