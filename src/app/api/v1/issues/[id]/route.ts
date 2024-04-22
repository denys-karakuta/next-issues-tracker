import { NextRequest, NextResponse } from 'next/server';

import { fetchIssueById, updateIssueByIdRequest } from '@/services/prisma/issues';

import { issueSchema } from '@/schemas/issues';

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const body = await req.json();

    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });
    }

    const updatedIssue = await updateIssueByIdRequest(issue.id, body);

    return NextResponse.json(updatedIssue);
};
