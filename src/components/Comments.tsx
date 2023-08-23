import { WEBSITE_URL } from "config"

import { dancing_script } from "@/app/layout";
import CommentForm from "./CommentForm";
import { Suspense } from "react";
import Shimmer from "./Shimmer";

export default async function Comments({ slug }: { slug: string }) {
    let comments = [];

    try {
        const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 1 } });
        comments = await commentsRes.json();
    } catch (err) {
        console.log(err)
    }


    return (
        
        <div className="mx-auto px-4 sm:px-6 md:w-3/4  lg:w-2/3 xl:w-1/2">
            
            <h3 className={`${dancing_script.className} text-6xl font-bold text-teal -skew-y-3 tracking-tighter m-4`}>Comments</h3>
            
            {/* Comment Form Component Here */}

            <Suspense fallback={<Shimmer />}>

                <CommentForm slug={slug}/>

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
