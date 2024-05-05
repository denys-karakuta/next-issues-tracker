import React from 'react';
import { Status } from '@prisma/client';
import { Flex } from '@radix-ui/themes';

import { fetchIssuesCount, fetchIssuesList } from '@/services/prisma/issues';

import Pagination from '@/components/common/Pagination';

import IssueActions from './_components/IssueActions';
import IssuesTable from './_components/IssuesTable';
import { SearchIssuesQuery } from './_types';
import { columnNames } from './_constants';

type OwnProps = {
    searchParams: SearchIssuesQuery;
};

const IssuesPage: React.FC<OwnProps> = async (props) => {
    const { searchParams } = props;

    const orderBy = columnNames.includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;
    const status = Object.values(Status).includes(searchParams.status) ? searchParams.status : undefined;
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

    const issues = await fetchIssuesList({ where: { status }, orderBy, skip: (page - 1) * pageSize, take: pageSize });
    const issuesCount = await fetchIssuesCount({ where: { status } });

    return (
        <Flex direction={'column'} gap={'3'}>
            <IssueActions />

            <IssuesTable issues={issues} searchParams={searchParams} />

            <Pagination pageSize={pageSize} currentPage={page} itemsCount={issuesCount} />
        </Flex>
    );
};

export default IssuesPage;
