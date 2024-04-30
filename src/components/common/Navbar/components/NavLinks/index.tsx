import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION } from '@/constants/routing';

const NavLinks: React.FC = () => {
    const currentPath = usePathname();

    const renderNavigationLinks = NAVIGATION.map((link) => {
        const linkClassNames = clsx('nav-link', { 'font-medium': currentPath === link.href });

        return (
            <li key={link.href}>
                <Link href={link.href} className={linkClassNames}>
                    {link.label}
                </Link>
            </li>
        );
    });

    return <ul className="flex space-x-7">{renderNavigationLinks}</ul>;
};

export default NavLinks;
