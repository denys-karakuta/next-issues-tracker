import React from 'react';
import Link from 'next/link';
import { Card, Flex, Text } from '@radix-ui/themes';

import { ROUTES } from '@/constants/routing';

type OwnProps = {
    inProgress: number;
    closed: number;
    open: number;
};

const IssuesSummary: React.FC<OwnProps> = async (props) => {
    const { open, inProgress, closed } = props;

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
