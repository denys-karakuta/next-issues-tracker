'use client';

import React from 'react';
import Link from 'next/link';
import { FaBug } from 'react-icons/fa';
import { Container, Flex } from '@radix-ui/themes';

import { ROUTES } from '@/constants/routing';

import AuthStatus from './components/AuthStatus';
import NavLinks from './components/NavLinks';

const Navbar: React.FC = () => {
    return (
        <nav className="border-b mb-5 py-4">
            <Container>
                <Flex justify="between">
                    <Flex align="center" gap="5">
                        <Link href={ROUTES.DEFAULT} className="text-3xl">
                            <FaBug />
                        </Link>

                        <NavLinks />
                    </Flex>

                    <AuthStatus />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
