import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Navbar from '@/src/components/common/Navbar';

import '@/src/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Issues tracker',
    description: 'Main page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />

                {children}
            </body>
        </html>
    );
};

export default RootLayout;
