import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "@/utils/db"
import Usermodel from "@/models/UserDetails"
import bcrypt from 'bcryptjs'

const handler= NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connectDB()
        try{
          const user=await Usermodel.findOne({email:credentials.email})
          if(user){
            const isPasswordCorrect= await bcrypt.compare(credentials.password,user.password)
            if(isPasswordCorrect){
              return user
            }else{
              throw new Error("Wrong Credentials")
            }
          }else{
            throw new Error("user not found")
          }
        }catch(err){
          throw new Error(err)
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login"
  }
})

export {handler as GET,handler as POST }