import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Heading, Flex, Card, Text, Grid, Box } from '@radix-ui/themes';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';

import { fetchIssueById } from '@/services/prisma/issues';

import EditIssueButton from './_components/EditIssueButton';

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
                <Heading>{issue.title}</Heading>

                <Flex className="space-x-3" my="2">
                    <IssueStatusBadge status={issue.status} />

                    <Text>{issue.createdAt.toDateString()}</Text>
                </Flex>

                <Card className="prose max-w-full" mt="4">
                    <ReactMarkdown>{issue.description}</ReactMarkdown>
                </Card>
            </Box>

            <Box>
                <EditIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    );
};

export default IssueDetailPage;
