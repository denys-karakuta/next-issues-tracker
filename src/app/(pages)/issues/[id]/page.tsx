import React from 'react';
import { notFound } from 'next/navigation';

import { fetchIssueById } from '@/services/prisma/issues';

type OwnProps = {
    params: { id: string };
};

const IssueDetailPage: React.FC<OwnProps> = async (props) => {
    const { params } = props;

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        notFound();
    }

    return (
        <div>
            <p>{issue.title}</p>
            <p>{issue.description}</p>
            <p>{issue.status}</p>
            <p>{issue.createdAt.toDateString()}</p>
        </div>
    );
};

export default IssueDetailPage;
