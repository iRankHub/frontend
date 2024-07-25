import CredentialsProvider from "next-auth/providers/credentials"

import { NextAuthOptions } from "next-auth";
import { login } from "./grpc/auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                token: { label: 'token', type: 'text' },
                userid: { label: 'userid', type: 'text' },
                userrole: { label: "userrole", type: "text" }
            },
            async authorize(credentials) {
                if (credentials) {
                    const user = {
                        id: credentials.userid.toString(),
                        token: credentials.token,
                        userid: credentials.userid.toString(),
                        userrole: credentials.userrole,
                    };
                    return user;
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userid = user.userid;
                token.token = user.token;
                token.userrole = user.userrole;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.userid = token.userid as string;
                session.user.token = token.token as string;
                session.user.userrole = token.userrole;
            }
            return session;
        }
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 7 day
        updateAge: 24 * 60 * 60, // 24 hours
    },
    secret: process.env.NEXTAUTH_SECRET
}
