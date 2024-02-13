import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Navbar from '@/src/components/common/Navbar';

import '@radix-ui/themes/styles.css';
import '@/src/assets/styles/theme-config.css';
import '@/src/assets/styles/globals.css';

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
                <Theme appearance="light" accentColor="ruby">
                    <Navbar />
                    <main className="p-5">{children}</main>
                </Theme>
            </body>
        </html>
    );
};

export default RootLayout;
