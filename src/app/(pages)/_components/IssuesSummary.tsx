import React from 'react';
import Link from 'next/link';
import { Card, Flex, Text } from '@radix-ui/themes';

import { fetchIssuesCount } from '@/services/prisma/issues';

import { ROUTES } from '@/constants/routing';

const IssuesSummary: React.FC = async () => {
    const inProgress = await fetchIssuesCount({ where: { status: 'IN_PROGRESS' } });
    const closed = await fetchIssuesCount({ where: { status: 'CLOSED' } });
    const open = await fetchIssuesCount({ where: { status: 'OPEN' } });

    const containers = [
        { label: 'Open Issues', value: open, status: 'OPEN' },
        {
            label: 'In-progress Issues',
            value: inProgress,
            status: 'IN_PROGRESS',
        },
        { label: 'Closed Issues', value: closed, status: 'CLOSED' },
    ];

    return (
        <Flex gap="4">
            {containers.map((container) => (
                <Card key={container.label}>
                    <Flex direction="column" gap="1">
                        <Link className="text-sm font-medium" href={`/${ROUTES.ISSUES_LIST}?status=${container.status}`}>
                            {container.label}
                        </Link>
                        <Text size="5" className="font-bold">
                            {container.value}
                        </Text>
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
};

export default IssuesSummary;
