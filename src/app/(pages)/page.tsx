import React from 'react';
import { Grid, Flex } from '@radix-ui/themes';

import { fetchIssuesCount } from '@/services/prisma/issues';

import IssuesSummary from './_components/IssuesSummary';
import LatestIssues from './_components/LatestIssues';
import IssuesChart from './_components/IssuesChart';

const HomePage: React.FC = async () => {
    const inProgress = await fetchIssuesCount({ where: { status: 'IN_PROGRESS' } });
    const closed = await fetchIssuesCount({ where: { status: 'CLOSED' } });
    const open = await fetchIssuesCount({ where: { status: 'OPEN' } });

    return (
        <Grid columns={{ initial: '1', md: '2' }} gap="5">
            <Flex direction="column" gap="5">
                <IssuesSummary closed={closed} inProgress={inProgress} open={open} />

                <IssuesChart closed={closed} inProgress={inProgress} open={open} />
            </Flex>

            <LatestIssues />
        </Grid>
    );
};

export default HomePage;
