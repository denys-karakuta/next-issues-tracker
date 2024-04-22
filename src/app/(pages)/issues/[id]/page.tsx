import React from 'react';
import { notFound } from 'next/navigation';
import { Box, Grid } from '@radix-ui/themes';

import { fetchIssueById } from '@/services/prisma/issues';

import EditIssueButton from './_components/EditIssueButton';
import EditIssueInfo from './_components/EditIssueInfo';

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
        <Grid columns={{ initial: '1', sm: '5' }} gap="5">
            <Box>
                <EditIssueInfo issue={issue} />
            </Box>

            <Box>
                <EditIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    );
};

export default IssueDetailPage;
