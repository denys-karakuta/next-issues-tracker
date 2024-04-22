import React from 'react';
import { notFound } from 'next/navigation';

import { fetchIssueById } from '@/services/prisma/issues';

import IssueForm from '@/components/common/IssueForm';

type OwnProps = {
    params: { id: string };
};

const EditIssuePage: React.FC<OwnProps> = async (props) => {
    const { params } = props;

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        notFound();
    }

    return <IssueForm issue={issue} />;
};

export default EditIssuePage;
