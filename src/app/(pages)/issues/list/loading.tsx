import { Table } from '@radix-ui/themes';

import Skeleton from '@/components/common/Skeleton';

import IssueActions from './_components/IssueActions';

const LoadingIssuesPage = () => {
    const issues = [1, 2, 3, 4, 5];

    const renderIssues = issues.map((issue) => (
        <Table.Row key={issue}>
            <Table.Cell>
                <Skeleton />

                <div className="block md:hidden">
                    <Skeleton />
                </div>
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">
                <Skeleton />
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">
                <Skeleton />
            </Table.Cell>
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

export default LoadingIssuesPage;
