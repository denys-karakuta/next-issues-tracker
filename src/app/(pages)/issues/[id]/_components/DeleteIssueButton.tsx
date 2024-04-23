import React from 'react';
import { Button } from '@radix-ui/themes';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

type OwnProps = { issueId: number };

const DeleteIssueButton: React.FC<OwnProps> = (props) => {
    const { issueId } = props;

    return (
        <Button size="3" color="red">
            <HiOutlinePencilSquare size="20" />
            Delete Issue
        </Button>
    );
};

export default DeleteIssueButton;
