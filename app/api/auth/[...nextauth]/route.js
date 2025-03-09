import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { matchPassword } from "@/lib/bcrypt";

const authOptions = {
  secret: "SECRET",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await db.usuario.findFirst({
          where: { correo: credentials.email },
        });

        if (!user) throw new Error("Credenciales incorrectas");

        const isMatch = await matchPassword(credentials.password, user.clave);
        if (!isMatch) throw new Error("Credenciales incorrectas");

        return {
          id: user.id,
          name: user.nombre,
          email: user.correo,
          rol: user.rol,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
