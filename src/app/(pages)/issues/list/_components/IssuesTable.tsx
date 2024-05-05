import React from 'react';
import NextLink from 'next/link';
import { Issue } from '@prisma/client';
import { Table } from '@radix-ui/themes';
import { LuArrowUpAZ } from 'react-icons/lu';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';
import Link from '@/components/common/Link';

import { ROUTES } from '@/constants/routing';

import { SearchIssuesQuery } from '../_types';
import { columns } from '../_constants';

type OwnProps = {
    searchParams: SearchIssuesQuery;
    issues: Issue[];
};

const IssuesTable: React.FC<OwnProps> = (props) => {
    const { issues, searchParams } = props;

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
        <Table.Root variant="surface">
            <Table.Header>{renderColumns}</Table.Header>

            <Table.Body>{renderIssues}</Table.Body>
        </Table.Root>
    );
};

export default IssuesTable;
