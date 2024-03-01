'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { BsClipboard2Data } from 'react-icons/bs';

import { NAVIGATION, ROUTES } from '@/constants/routing';

const Navbar: React.FC = () => {
    const currentPath = usePathname();

    const renderNavigation = NAVIGATION.map((link) => {
        const linkClassNames = clsx('transition-colors text-zinc-500 hover:text-zinc-900', {
            'text-zinc-900 font-medium': currentPath === link.href,
        });

        return (
            <li key={link.href}>
                <Link href={link.href} className={linkClassNames}>
                    {link.label}
                </Link>
            </li>
        );
    });

    return (
        <nav className="flex items-center space-x-7 border-b-2 p-5 mb-5">
            <Link href={ROUTES.DEFAULT} className="text-3xl">
                <BsClipboard2Data />
            </Link>

            <ul className="flex space-x-5">{renderNavigation}</ul>
        </nav>
    );
};

export default Navbar;
