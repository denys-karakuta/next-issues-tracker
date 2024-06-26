import React from 'react';
import { Box } from '@radix-ui/themes';

import Skeleton from '@/components/common/Skeleton';

const IssueFormSkeleton: React.FC = () => {
    return (
        <Box className="max-w-xl">
            <Skeleton height="2rem" />

            <Skeleton height="20rem" />
        </Box>
    );
};

export default IssueFormSkeleton;
