import React from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import { fetchIssueById } from '@/services/prisma/issues';

import IssueFormSkeleton from './loading';

const IssueForm = dynamic(() => import('@/components/common/IssueForm'), { ssr: false, loading: () => <IssueFormSkeleton /> });

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
