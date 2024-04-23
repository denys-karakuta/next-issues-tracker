import React from 'react';
import dynamic from 'next/dynamic';

import IssueFormSkeleton from './loading';

const IssueForm = dynamic(() => import('@/components/common/IssueForm'), { ssr: false, loading: () => <IssueFormSkeleton /> });

const CreateIssuePage: React.FC = () => {
    return <IssueForm />;
};

export default CreateIssuePage;
