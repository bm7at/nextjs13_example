import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/app/lib/mongoclient'
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    EmailProvider({
      //server: process.env.EMAIL_SERVER,
      //from: process.env.EMAIL_FROM
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    })
  ]

  /*
  pages: {
    signIn: '/signin'

  }
  */
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
