import React, { PropsWithChildren } from 'react';
import { Text } from '@radix-ui/themes';

const ErrorMessage: React.FC<PropsWithChildren> = (props) => {
    const { children } = props;

    if (!children) {
        return null;
    }

    return (
        <Text color="red" as="p">
            {children}
        </Text>
    );
};

export default ErrorMessage;
