import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

import { createIssueRequest } from '@/services/prisma/issues';

import authOptions from '@/app/api/auth/authOptions';

import { issueSchema } from '@/schemas/issues';

export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({}, { status: 401 });
    }

    const body = await req.json();

    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newIssue = await createIssueRequest(body);

    return NextResponse.json(newIssue, { status: 201 });
};
