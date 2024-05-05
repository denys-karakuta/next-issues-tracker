import React from 'react';
import Link from 'next/link';
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';

import { fetchIssuesList } from '@/services/prisma/issues';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';

import { ROUTES } from '@/constants/routing';

const LatestIssues = async () => {
    const issues = await fetchIssuesList({
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: {
            assignedToUser: true,
        },
    });

    const renderIssues = issues.map((issue) => (
        <Table.Row key={issue.id}>
            <Table.Cell>
                <Flex justify="between">
                    <Flex direction="column" align="start" gap="2">
                        <Link href={`/${ROUTES.ISSUES_VIEW}/${issue.id}`}>{issue.title}</Link>

                        <IssueStatusBadge status={issue.status} />
                    </Flex>

                    {issue.assignedToUser ? <Avatar src={issue.assignedToUser.image!} fallback="?" size="2" radius="full" /> : null}
                </Flex>
            </Table.Cell>
        </Table.Row>
    ));

    return (
        <Card>
            <Heading size="4" mb="5">
                Latest Issues
            </Heading>

            <Table.Root>
                <Table.Body>{renderIssues}</Table.Body>
            </Table.Root>
        </Card>
    );
};

export default LatestIssues;
