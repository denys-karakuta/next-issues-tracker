import NextAuth from 'next-auth';

import authOptions from '@/app/api/v1/auth/authOptions';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
