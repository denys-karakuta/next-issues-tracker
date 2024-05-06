import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

import { deleteIssueRequest, fetchIssueById, updateIssueByIdRequest } from '@/services/prisma/issues';
import { fetchUserById } from '@/services/prisma/users';

import authOptions from '@/app/api/auth/authOptions';

import { patchIssueSchema } from '@/schemas/issues';

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({}, { status: 401 });
    }

    const body = await req.json();

    const validation = patchIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const { assignedToUserId } = body;

    if (assignedToUserId) {
        const user = await fetchUserById(assignedToUserId);

        if (!user) {
            return NextResponse.json({ error: 'Invalid user' }, { status: 400 });
        }
    }

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });
    }

    const updatedIssue = await updateIssueByIdRequest(issue.id, body);

    return NextResponse.json(updatedIssue);
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({}, { status: 401 });
    }

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });
    }

    await deleteIssueRequest(issue.id);

    return NextResponse.json({});
};
