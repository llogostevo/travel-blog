import { supabase } from "@/utils/supabase";
import { Database } from "@/types/supabaseTypes";

import Link from "next/link";
import { dancing_script, inter } from "../layout";
import Image from "next/image";

export default async function Posts() {
    
    const {data: posts} = await supabase
    .from('blogposts')
    .select('id, title, quote, date, slug, category, content')

    // loop through the category array using the terneary operator and return the new array or an empty array
    const categoryArray = posts ? posts.map((post) => post.category) : [];

    // create a new unique set from the categoryArray categories
    const categories = Array.from(new Set(categoryArray))

    const {data: markdown} = await supabase
    .from('blogposts')
    .select('content')


    return <main className="min-h-screen">

    {/* THIS SHOULD BE A COMPONENT */}
    <section>
        <h2 className="text-xl font-bold mb-4">Filter by category</h2>
        <div>
            <div className="flex flex-row gap-4">
                <div className="flex items-center">
                    <button className="px-2 py-1 text-xs bg-red-500 hover:bg-nonphotblue text-white rounded">
                        <Link href={`/blog/`}><span>All</span></Link>
                    </button>
                </div>
                {categories.map((category) => {
                    return (
                        <div key={category} className="flex items-center">
                            <button className="px-2 py-1 text-xs bg-teal hover:bg-nonphotblue text-white rounded">
                                <Link href={`/blog/categories/${category}`}><span>{category.toUpperCase()}</span></Link>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    {/* Comp end */}

    <section className='mb-20'>
        <h1 className={`${dancing_script.className} text-4xl text-center md:text-left md:text-5xl font-bold -skew-y-3`} >Blog Posts - <span className="text-teal">all</span></h1>
    </section>

    <section>
        <h2 className={`font-bold text-sm text-center sm:text-xl md:text-left md:text-2xl mb-4`}>✈️ Your Next Adventure Awaits! ✈️</h2>
        <p className="mb-2 ml-0 md:ml-10">Dive deep into our travel guides, tips, and tales. Whether you&apos;re looking for the next best place to dine in Paris, or trekking routes in the Andes, we&apos;ve got you covered. So grab your map, pack your bags, and let&apos;s embark on a journey together!</p>
    </section>


    {/* THIS SHOULD BE A COMPONENT */}
    <section className="flex flex-wrap gap-20 justify-center">
        {posts?.map((post) => {
            return (
                <div key={post.slug} className="bg-white shadow-md hover:shadow-lg hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 m-4 p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    <Link className="flex flex-col items-center gap-5" href={`/blog/${post.slug}`}>
                        <h2 className={`${dancing_script.className} text-3xl font-bold`}>{`${post.title}`}</h2>
                        <Image
                            className="rounded"
                            src={`/images/${post.title.charAt(0).toLowerCase() + post.title.slice(1)}.jpg`}
                            height={200}
                            width={200}
                            alt="Blog Post Image"
                        />
                        {/* <h2 className={`${dancing_script.className} text-xl -skew-y-3 mb-2 text-center text-gray-600 tracking-tighter`}>{`${post.quote}`}</h2> */}
                        <p className={`${dancing_script.className} text-center w-1/2`}>{`${post.content.slice(0,50)}`}...</p>
                    </Link>
                </div>
            )
        })}

    </section>

</main>
}


