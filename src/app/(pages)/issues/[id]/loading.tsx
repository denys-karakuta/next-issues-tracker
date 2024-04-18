import React from 'react';
import { Box, Flex, Card } from '@radix-ui/themes';

import Skeleton from '@/components/common/Skeleton';

const LoadingIssueDetailPage: React.FC = () => {
    return (
        <Box className="max-w-xl">
            <Skeleton />

            <Flex className="space-x-3" my="2">
                <Skeleton width="5rem" />
                <Skeleton width="8rem" />
            </Flex>

            <Card className="prose" mt="4">
                <Skeleton count={3} />
            </Card>
        </Box>
    );
};

export default LoadingIssueDetailPage;
