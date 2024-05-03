import { Prisma } from '@prisma/client';

import prisma from '@/configs/prisma/client';

export const fetchUsers = (config?: Prisma.UserFindManyArgs) => {
    return prisma.user.findMany(config);
};

export const fetchUserById = (id: string) => {
    return prisma.user.findUnique({ where: { id } });
};
