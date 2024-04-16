import Link from 'next/link';

import { Button, Table } from '@radix-ui/themes';

import { fetchManyIssues } from '@/services/prisma/issues';

import { ROUTES } from '@/constants/routing';

const IssuesPage: React.FC = async () => {
    const issues = await fetchManyIssues();

    const renderIssues = issues.map((issue) => (
        <Table.Row key={issue.id}>
            <Table.Cell>
                {issue.title}
                <div className="block md:hidden">{issue.status}</div>
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">{issue.status}</Table.Cell>

            <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
        </Table.Row>
    ));

    return (
        <div>
            <Button size="3" className="mb-5">
                <Link href={ROUTES.ISSUES_NEW}>New Issue</Link>
            </Button>

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
        </div>
    );
};

export default IssuesPage;
