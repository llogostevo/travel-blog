import { dancing_script } from "@/app/layout";
import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/posts";

import { notFound } from "next/navigation";


type BlogPostParams = {
    params: {
        slug: string;
    };
};

// ************ FIX THIS HERE!!!! **************
// this doesnt work at present. 
type Post = {
    title: string,
    slug: string,
    content: string,
    month: string,
    year: string,
    category: string,
}

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams({ params }: BlogPostParams) {
    const posts = getPosts()

    // generateStaticParams expcts you to output an array of objects, containing the 
    return posts.map((post) => {
        return {
            slug: post.slug,
        };
    });
}

export default function BlogPostPage({ params }: BlogPostParams) {

    const post = getPostBySlug(params.slug)

    // this presents a dark mode post at moment
    if (!post) {
        notFound();
    }
    console.log(post?.date)

    return (
        <main>
            <div className='px-20 border bg-[#fafef] shadow rounded-lg mb-10'>
                <section className='mb-20'>

                    <h1 className={`${dancing_script.className} text-4xl md:text-5xl font-bold -skew-y-3`} >{post?.title}</h1>
                    <h2 className={`${dancing_script.className} text-2xl mt-2 font-bold -skew-y-3`} >{post?.date}</h2>
                </section>

                <section>
                        <div className="prose blog-post"key={post.slug}>
                            <div  dangerouslySetInnerHTML = {{__html: post.body.html}}></div>
                        </div>
                </section>
            </div>

        </main>
    )
}

