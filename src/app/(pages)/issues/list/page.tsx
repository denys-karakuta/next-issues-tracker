import React from 'react';
import NextLink from 'next/link';
import { Status } from '@prisma/client';
import { Table } from '@radix-ui/themes';
import { LuArrowUpAZ } from 'react-icons/lu';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';
import Link from '@/components/common/Link';

import { fetchIssuesCount, fetchIssuesList } from '@/services/prisma/issues';

import { ROUTES } from '@/constants/routing';

import IssueActions from './_components/IssueActions';
import Pagination from '@/components/common/Pagination';

const columns = [
    { label: 'Issue', value: 'title' },
    {
        label: 'Status',
        value: 'status',
        className: 'hidden md:table-cell',
    },
    {
        label: 'Created',
        value: 'createdAt',
        className: 'hidden md:table-cell',
    },
] as const;

type OwnProps = {
    searchParams: {
        orderBy: 'status' | 'title' | 'createdAt';
        status: Status;
        page: string;
    };
};

const IssuesPage: React.FC<OwnProps> = async (props) => {
    const { searchParams } = props;

    const status = Object.values(Status).includes(searchParams.status) ? searchParams.status : undefined;
    const orderBy = columns.map((column) => column.value).includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

    const issues = await fetchIssuesList({ where: { status }, orderBy, skip: (page - 1) * pageSize, take: pageSize });

    const issuesCount = await fetchIssuesCount({ where: { status } });

    const renderColumns = (
        <Table.Row>
            {columns.map((column) => (
                <Table.ColumnHeaderCell key={column.value}>
                    <NextLink href={{ query: { ...searchParams, orderBy: column.value } }}>{column.label}</NextLink>

                    {column.value === searchParams.orderBy ? <LuArrowUpAZ className="ml-1 size-5 inline" /> : null}
                </Table.ColumnHeaderCell>
            ))}
        </Table.Row>
    );

    const renderIssues = issues.map((issue) => (
        <Table.Row key={issue.id}>
            <Table.Cell>
                <Link href={`/${ROUTES.ISSUES_VIEW}/${issue.id}`}>{issue.title}</Link>

                <div className="block md:hidden">
                    <IssueStatusBadge status={issue.status} />
                </div>
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
        </Table.Row>
    ));

    return (
        <>
            <IssueActions />

            <Table.Root variant="surface">
                <Table.Header>{renderColumns}</Table.Header>

                <Table.Body>{renderIssues}</Table.Body>
            </Table.Root>

            <Pagination pageSize={pageSize} currentPage={page} itemsCount={issuesCount} />
        </>
    );
};

export default IssuesPage;
