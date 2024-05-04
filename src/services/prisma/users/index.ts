import { Prisma } from '@prisma/client';

import prisma from '@/configs/prisma/client';

export const fetchUsers = (args?: Prisma.UserFindManyArgs) => {
    return prisma.user.findMany(args);
};

export const fetchUserById = (id: string) => {
    return prisma.user.findUnique({ where: { id } });
};
