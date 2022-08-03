import NextAuth from "next-auth";
import Discord from "../../../lib/discord";

const options = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify guilds" } },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    // async redirect(url, baseUrl) { return baseUrl },
    async session({ session, user, token }) {
      // @ts-ignore
      session.profile = token.profile;

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (profile) {
        token.profile = profile
      }
      return token
    },
  },
  theme: "light",

  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
