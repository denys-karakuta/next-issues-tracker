import type { Metadata } from 'next';

import { Container, Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';

import AuthProvider from '@/providers/AuthProvider';

import Navbar from '@/components/common/Navbar';

import '@radix-ui/themes/styles.css';
import '@/assets/styles/theme-config.css';
import '@/assets/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Issues tracker',
    description: 'Main page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <AuthProvider>
                    <Theme appearance="light" accentColor="purple">
                        <Navbar />

                        <main className="p-5">
                            <Container>{children}</Container>
                        </main>
                    </Theme>
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;
