import { NextRequest, NextResponse } from 'next/server';

import { fetchUsers } from '@/services/prisma/users';

export const GET = async (req: NextRequest) => {
    const users = await fetchUsers({ orderBy: { name: 'asc' } });

    return NextResponse.json(users);
};
