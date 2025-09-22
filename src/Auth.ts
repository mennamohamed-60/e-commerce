import { NextAuthOptions ,User  } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface AuthUser extends User {
  role: string;
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined): Promise<AuthUser | null>{
        const res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const payload = await res.json();
        console.log("Signin payload:", payload);

        if (payload.message === "success" && payload.token) {
          return {
            id: payload.user._id,
            email: payload.user.email,
            name: payload.user.name,
            role: payload.user.role,
            accessToken: payload.token,
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
