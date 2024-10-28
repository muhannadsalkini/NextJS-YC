// This is where you can control the behaviour of the library and specify custom authentication logic, adapters, etc.

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
});
