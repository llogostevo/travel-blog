"use client";

// import the set website url so that it can be used in vercel
import { WEBSITE_URL } from "@/../config";

// import use router, make sure it is from next/navigation
import { useRouter } from 'next/navigation'

import { useTransition } from "react";

export default function CommentForm({ slug, username }: { slug: string; username: string }) {
    // `/api/comments/${slug}`

    // create the router hook to trigger a page refresh
    const router = useRouter()

    // create the transition hook to manage the transition of the page refresh
    const [isPending, startTransition] = useTransition()

    // async function to handle the form submission
    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        // prevent refresh of the page on submit
        event.preventDefault();
        console.log(event)

        // get the values from the form
        //  @ts-ignore
        const username = event.target.username.value;
        //  @ts-ignore
        const comment = event.target.comment.value;

        // create form data object to handle the form data
        const formData = new FormData();
        console.log(formData)

        // append the data in the form to the form data object
        formData.append("username", username)
        formData.append("comment", comment)

        // this needs ignore as producing error, clears out the comment from the form once completed the above. 
            //  @ts-ignore
            event.target.comment.value = "";

        //make the api call
            // set the options that will be used in the fetch
            const options = {body: formData, method: "POST"}
            
            // use the fetch API to action the post method containing the form data
            // the formData object handles the headers for the fetch api
            const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options)

            
            
            // refresh the current route and fetch new data from the server without losing the client side browser or react state
            // takes a callback as a parameter
            startTransition(() => {
                router.refresh();

            })

    }

    return (
        <form className="w-full mt-10" onSubmit={handleFormSubmit} >
            <div className="flex flex-col gap-4 items-center border-b border-teal py-2">
               
                <label className="w-full text-gray-500 mr-3 leading-tight focus:outline-none" htmlFor="username">Commenting as: </label>
                <input className="appearance-none  italic bg-transparent border-b border-teal pb-2 w-full text-gray-200 mr-3 px-2 leading-tight focus:outline-none" type="text" value={username} name="username" disabled aria-label="Username" />
               
                <textarea className="appearance-none bg-transparent border-none sm:30 md:h-60 lg:h-80 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Your comment..." name="comment" aria-label="Comment" required></textarea>
                <button className="flex-shrink-0 bg-teal hover:bg-nonphotblue hover:bg-photo text-sm text-white py-1 px-2 rounded" type="submit">
                    Add Comment
                </button>
            </div>
        </form>
    )
}
