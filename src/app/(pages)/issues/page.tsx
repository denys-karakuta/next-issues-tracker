import Link from 'next/link';

import { Button } from '@radix-ui/themes';

import { ROUTES } from '@/constants/routing';

const IssuesPage: React.FC = () => {
    return (
        <div>
            <Button size="3">
                <Link href={ROUTES.ISSUES_NEW}>New Issue</Link>
            </Button>
        </div>
    );
};

export default IssuesPage;
