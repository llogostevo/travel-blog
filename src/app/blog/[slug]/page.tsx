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

    // this doesn't work, its is always undefined at present
    if (!post) {
        notFound();
    }

    return (
        <main>
            <div className='px-20 border bg-[#fafef] shadow rounded-lg mb-10'>
                <section className='mb-20'>

                    <h1 className={`${dancing_script.className} text-4xl md:text-5xl font-bold -skew-y-3`} >{post?.title}</h1>
                    <h2 className={`${dancing_script.className} text-2xl mt-2 font-bold -skew-y-3`} >{post?.month} {post?.year}</h2>
                </section>

                <section className=" px-10 grid grid-cols-2 gap-5">
                    <div>
                        <Image
                            className="mb-10 rounded-sm"
                            src={`/images/${post.title.charAt(0).toLowerCase() + post.title.slice(1)}.jpg`}
                            height={700}
                            width={700}
                            alt={`Blog Post ${post.title} Image`}
                            // this doesnt work below
                            placeholder="blur"
                            blurDataURL="images/blur.jpg"
                        />
                    </div>
                    <div>
                        
                        <div key={post.slug}>
                            {/* <h2 className="font-bold text-lg mb-4">{post.title}</h2> */}
                            {post.blogTitle.map((title, index) => (
                                <div key={index} className="my-4"> {/* "my-4" is for margin on the y-axis (top & bottom) */}
                                    <h3 className={`${dancing_script.className} font-bold  text-2xl mt-4 mb-2 ml-3`}>{title}</h3>
                                    <p className="ml-10 mb-4">{post.blogDescription[index]}</p>
                                </div>
                            ))}
                        </div>
                       </div>

                </section>
            </div>

        </main>
    )
}

