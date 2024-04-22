import React from 'react';
import { Issue } from '@prisma/client';
import ReactMarkdown from 'react-markdown';
import { Heading, Flex, Card, Text } from '@radix-ui/themes';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';

type OwnProps = {
    issue: Issue;
};

const EditIssueInfo: React.FC<OwnProps> = (props) => {
    const { issue } = props;

    return (
        <>
            <Heading>{issue.title}</Heading>

            <Flex className="space-x-3" my="2">
                <IssueStatusBadge status={issue.status} />

                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>

            <Card className="prose max-w-full" mt="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </>
    );
};

export default EditIssueInfo;
