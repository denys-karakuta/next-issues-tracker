import React from 'react';
import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

type OwnProps = {
    children: React.ReactNode;
    href: string;
};

const Link: React.FC<OwnProps> = (props) => {
    const { href, children } = props;

    return (
        <NextLink href={href} passHref legacyBehavior>
            <RadixLink>{children}</RadixLink>
        </NextLink>
    );
};

export default Link;
