import React from 'react';
import Link from 'next/link';
import { Button, Flex } from '@radix-ui/themes';

import { ROUTES } from '@/constants/routing';

import IssuesStatusFilter from './IssuesStatusFilter';

const IssueActions = () => {
    return (
        <Flex justify="between" className="mb-5">
            <Button size="3">
                <Link href={`/${ROUTES.ISSUES_CREATE}`}>New Issue</Link>
            </Button>

            <IssuesStatusFilter />
        </Flex>
    );
};

export default IssueActions;
