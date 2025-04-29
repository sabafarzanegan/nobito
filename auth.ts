import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import db from './db';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        const user = await db.user.findFirst({
          where: {
            email: credentials.email!,
          },
        });
        console.log('find user', user);
        if (!user) {
          throw new Error('شما ثبت نام نکردید!');
        } else {
          const correctPass = await compare(credentials.password as string, user.password);
          if (!correctPass) {
            throw new Error('رمز عبور اشتباه است!');
          }
        }
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.username,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
