import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

import { ROUTES } from '@/constants/routing';

type OwnProps = { issueId: number };

const EditIssueButton: React.FC<OwnProps> = (props) => {
    const { issueId } = props;

    return (
        <Button size="3">
            <HiOutlinePencilSquare size="20" />

            <Link href={`${ROUTES.ISSUES}/${issueId}/${ROUTES.EDIT}`}>Edit Issue</Link>
        </Button>
    );
};

export default EditIssueButton;
