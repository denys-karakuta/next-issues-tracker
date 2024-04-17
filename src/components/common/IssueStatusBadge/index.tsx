import React from 'react';
import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

import { STATUS_MAP } from '@/constants/issue';

type OwnProps = {
    status: Status;
};

const IssueStatusBadge: React.FC<OwnProps> = (props) => {
    const { status } = props;

    const { label, color } = STATUS_MAP[status];

    return <Badge color={color}>{label}</Badge>;
};

export default IssueStatusBadge;
