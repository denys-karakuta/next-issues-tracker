import React from 'react';
import { Button } from '@radix-ui/themes';
import { FaRegTrashAlt } from 'react-icons/fa';

type OwnProps = { issueId: number };

const DeleteIssueButton: React.FC<OwnProps> = (props) => {
    const { issueId } = props;

    return (
        <Button size="3" color="red">
            <FaRegTrashAlt size="18" />
            Delete Issue
        </Button>
    );
};

export default DeleteIssueButton;
