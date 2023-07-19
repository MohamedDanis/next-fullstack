import { NextResponse } from "next/server"
import connectDB from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (request,{params}) => {

    const {id} = params
    try {
        await connectDB();
        const post =  await Post.findById(id)
        return new NextResponse(JSON.stringify(post))
    } catch (error) {
        return new NextResponse("Db error",{status:500})
    }
     
}
export const DELETE = async (request,{params}) => {

    const {id} = params
    try {
        await connectDB();
      await Post.findByIdAndDelete(id)
        return new NextResponse("POst deleted",{status:201})
    } catch (error) {
        return new NextResponse("Db error",{status:500})
    }
     
}