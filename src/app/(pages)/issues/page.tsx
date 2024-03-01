import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

import { ROUTES } from '@/src/constants/routing';

const IssuesPage = () => {
    return (
        <div>
            <Button size="3">
                <Link href={ROUTES.ISSUES_NEW}>New Issue</Link>
            </Button>
        </div>
    );
};

export default IssuesPage;
