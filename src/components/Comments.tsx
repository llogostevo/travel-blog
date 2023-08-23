import { WEBSITE_URL } from "config"

import { dancing_script } from "@/app/layout";
import CommentForm from "./CommentForm";
import { Suspense } from "react";
import Shimmer from "./Shimmer";

import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";


export default async function Comments({ slug }: { slug: string }) {
    let comments = [];

    try {
        const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 1 } });
        comments = await commentsRes.json();
        console.log("did this")
        console.log(comments)
    } catch (err) {
        console.log(err)
    }

    // import our user using the type
    const user: User | null = await currentUser();


    return (
        
        <div className="mx-auto px-4 sm:px-6 md:w-3/4  lg:w-2/3 xl:w-1/2">
            
            <h3 className={`${dancing_script.className} text-6xl font-bold text-teal -skew-y-3 tracking-tighter m-4`}>Comments</h3>
            
            {/* Comment Form Component Here */}

                {/* @ts-ignore */}
                {user ? <CommentForm slug={slug} username={user.username}/> : <Link href="/sign-in">Sign In To Comment</Link>}
            
                <Suspense fallback={<Shimmer />}>
                    <ul className="w-full">
                        {/* @ts-ignore */}
                        {comments.map((comment) => {
                            return (
                                <li key={comment.uuid} className="flex flex-col gap-4 items-start border-b border-teal py-2">
                                    <span className="font-semibold text-gray-700">{comment.username} says:</span>
                                    <p className="text-gray-700 mr-3 px-2">{comment.comment}</p>
                                </li>
                            );
                        })}
                    </ul>
            </Suspense>
        </div>


    )
}
