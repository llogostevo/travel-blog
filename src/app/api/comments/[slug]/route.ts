import { getComment } from "@/lib/comments";

import { NextRequest, NextResponse} from "next/server"

type BlogPostParams = {
    params: {
        slug: string;
    };
};


export async function GET(request: NextRequest, {params}: BlogPostParams){

    // get comments
    const comments = getComment(params.slug)

    //return the comments
    return NextResponse.json({comments});
}

export async function POST(){
    
}