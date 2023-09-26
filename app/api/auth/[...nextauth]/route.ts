import NextAuth from "next-auth/next";
import prismadb from "../../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import bcrypt from "bcrypt"

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // if email and password is there
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing Fields');
        }

        // if user actuallt exist 
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          }
        });

        // if user doesn't exist 
        if (!user || !user.hashedPassword) {
          throw new Error("No user found");
        }

        // check if the passwords match
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        // if passwords dont match
        if (!passwordMatch) {
          throw new Error("Password not matched");
          return null;
        }

        // if the passwords matched
        return user;

      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};

