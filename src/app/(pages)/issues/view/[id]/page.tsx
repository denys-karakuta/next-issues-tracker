import React from 'react';
import { notFound } from 'next/navigation';
import { Box, Flex, Grid } from '@radix-ui/themes';

import { fetchIssueById } from '@/services/prisma/issues';

import DeleteIssueButton from './_components/DeleteIssueButton';
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
            <Box className="md:col-span-4">
                <EditIssueInfo issue={issue} />
            </Box>

            <Box>
                <Flex direction="column" gap="4">
                    <EditIssueButton issueId={issue.id} />

                    <DeleteIssueButton issueId={issue.id} />
                </Flex>
            </Box>
        </Grid>
    );
};

export default IssueDetailPage;
