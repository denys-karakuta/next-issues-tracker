import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Container, Theme } from '@radix-ui/themes';

import QueryClientProvider from '@/providers/QueryClientProvider';
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
                <QueryClientProvider>
                    <AuthProvider>
                        <Theme appearance="light" accentColor="purple">
                            <Navbar />

                            <main className="p-5">
                                <Container>{children}</Container>
                            </main>
                        </Theme>
                    </AuthProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
