import React from 'react';
import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

import { ISSUE_STATUS } from '@/constants/issue';

type OwnProps = {
    status: Status;
};

const IssueStatusBadge: React.FC<OwnProps> = (props) => {
    const { status } = props;

    const { label, color } = ISSUE_STATUS[status];

    return <Badge color={color}>{label}</Badge>;
};

export default IssueStatusBadge;
