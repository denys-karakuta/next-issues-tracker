import React from 'react';
import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { Box, Flex, Grid } from '@radix-ui/themes';

import authOptions from '@/app/auth/authOptions';

import { fetchIssueById } from '@/services/prisma/issues';

import DeleteIssueButton from './_components/DeleteIssueButton';
import EditIssueButton from './_components/EditIssueButton';
import EditIssueInfo from './_components/EditIssueInfo';

type OwnProps = {
    params: { id: string };
};

const IssueViewPage: React.FC<OwnProps> = async (props) => {
    const { params } = props;

    const session = await getServerSession(authOptions);

    const issue = await fetchIssueById(params.id);

    if (!issue) {
        notFound();
    }

    return (
        <Grid columns={{ initial: '1', sm: '5' }} gap="5">
            <Box className="md:col-span-4">
                <EditIssueInfo issue={issue} />
            </Box>

            {session ? (
                <Box>
                    <Flex direction="column" gap="4">
                        <EditIssueButton issueId={issue.id} />

                        <DeleteIssueButton issueId={issue.id} />
                    </Flex>
                </Box>
            ) : null}
        </Grid>
    );
};

export default IssueViewPage;
