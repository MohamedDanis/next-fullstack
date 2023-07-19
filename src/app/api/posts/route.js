import { NextResponse } from "next/server"
import connectDB from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (request) => {
    const url=new URL(request.nextUrl)
    const username=url.searchParams.get("username")
    try {
        await connectDB();
        console.log(username,33);
        const posts =  await Post.find(username && {username})
        console.log(posts,34);
        return new NextResponse(JSON.stringify(posts))
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
    
}
export const POST = async (request) => {
    const body= await request.json()
    
    const newPost=new Post(body)
    try {
        await connectDB();
       await newPost.save()
        return new NextResponse("POst created ",{status:201})
    } catch (error) {
        return new NextResponse("Db error",{status:500})
    }
    
}