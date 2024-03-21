import { NextRequest, NextResponse } from 'next/server';

import { createIssueSchema } from '@/schemas/issues';

import prisma from '@/configs/prisma/client';

export const POST = async (req: NextRequest) => {
    const body = await req.json();

    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description },
    });

    return NextResponse.json(newIssue, { status: 201 });
};
