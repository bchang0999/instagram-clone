import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // If you want to have a custom page... include this..
    pages: {
        signIn: "/auth/signin",
    },
    // If you dont have custom page... style with this...
    theme: {
        logo: "https://links.papareact.com/sq0",
        brandColor: "#F13287",
        colorScheme: "auto",
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLowerCase();
            session.user.uid = token.sub;
            return session;
        },
    },
});