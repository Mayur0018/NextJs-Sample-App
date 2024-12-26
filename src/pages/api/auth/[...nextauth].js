import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOprations = {
  providers: [
    GithubProvider({
      clientId: "Ov23lim8uum6FCCMCUbQ",
      clientSecret: "e5171997cfc2b48c746686cc5557fbdafbfa8299",
    }),
  ],
};

export default NextAuth(authOprations);
