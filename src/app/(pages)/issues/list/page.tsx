import React from 'react';
import { Status } from '@prisma/client';
import { Table } from '@radix-ui/themes';

import IssueStatusBadge from '@/components/common/IssueStatusBadge';
import Link from '@/components/common/Link';

import { fetchIssuesList } from '@/services/prisma/issues';

import { ROUTES } from '@/constants/routing';

import IssueActions from './_components/IssueActions';

type OwnProps = {
    searchParams: { status: Status };
};

const IssuesPage: React.FC<OwnProps> = async (props) => {
    const { searchParams } = props;

    const issues = await fetchIssuesList({ where: { status: searchParams.status || undefined } });

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
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>

                        <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>

                        <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{renderIssues}</Table.Body>
            </Table.Root>
        </>
    );
};

export default IssuesPage;
