import { dancing_script } from "@/app/layout";

export default async function Comments({ slug }: { slug: string }) {
    const commentsRes = await fetch(`http://localhost:3000/api/comments/${slug}`, { next: { revalidate: 5 } });
    const comments = await commentsRes.json();

    return (
        <div className="mx-auto px-4 sm:px-6 md:w-3/4  lg:w-2/3 xl:w-1/2">
    <h3 className={`${dancing_script.className} text-6xl font-bold text-teal -skew-y-3 tracking-tighter m-4`}>Comments</h3>
    <form className="w-full" method="POST" action={`/api/comments/${slug}`}>
        <div className="flex flex-col gap-4 items-center border-b border-teal py-2">
            <input className="appearance-none bg-transparent border-b border-teal py-2 w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" name="username" aria-label="Full name" />
            <textarea className="appearance-none bg-transparent border-none sm:30 md:h-60 lg:h-80 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Your comment..." name="comment" aria-label="Comment"></textarea>
            <button className="flex-shrink-0 bg-teal hover:bg-nonphotblue hover:bg-photo text-sm text-white py-1 px-2 rounded" type="submit">
                Add Comment
            </button>
        </div>
    </form>
    
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

</div>

    
    )
}
