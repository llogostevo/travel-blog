import { dancing_script } from "@/app/layout";
import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/posts";

import { notFound } from "next/navigation";


type  BlogPostParams = {
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
export function generateStaticParams(){
    const posts = getPosts()

    // generateStaticParams expcts you to output an array of objects, containing the 
    return posts.map((post)=>{
        return {
            slug: post.slug,
        };
    });
}

export default function BlogPostPage({ params }: BlogPostParams) {
    
    const post = getPostBySlug(params.slug)
    console.log(post);

    // this doesn't work, its is always undefined at present
    if (!post) {
        notFound();
    }

    return (
        <main>
            <div className='px-20 border bg-[#fafef] shadow rounded-lg mb-10'>
            <section className='mb-20'>
                <h1 className={`${dancing_script.className} text-4xl font-bold tracking-tighter -skew-y-3`} >{post?.title}</h1>
                <h2 className={`${dancing_script.className} text-2xl font-bold tracking-tighter -skew-y-3`} >{post?.month} {post?.year}</h2>
            </section>

            <section className=" px-10 grid grid-cols-2 gap-5">
                <div>
                    <Image
                        className="mb-10 rounded-sm"
                        src={`/images/${post.title}.jpg`}
                        height={700}
                        width={700}
                        alt={`Blog Post ${post.title} Image`}
                        // this doesnt work below
                        placeholder="blur"
                        blurDataURL="images/blur.jpg"
                    />
                </div>
                <div>
                    <p>{post?.content}</p>
                    {/* THIS IS STATIC CONTENT AT THE MOMENT put this into an object */}
                        <br />
                        <p className="italic underline">this is static below</p>
                        <h2 className="font-bold text-lg mb-4">✈️ A Whirlwind Journey Through Berlin! ✈️</h2>

                        <p className="mb-2 ml-10">Berlin, with its rich history and vibrant cultural scene, had always been on my bucket list. Last month, I finally took the plunge and embarked on a week-long adventure to this German metropolis.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Day 1: Touchdown in Berlin</h3>
                        <p className="ml-10 mb-4">As the plane descended into Tegel Airport, the iconic Fernsehturm (TV Tower) pierced the Berlin skyline, beckoning me to explore the city. After settling into my cozy Airbnb in the Kreuzberg district, I decided to stroll around and get a feel for the neighborhood. Streets filled with quirky art galleries, eclectic bars, and tantalizing food stalls welcomed me. Dinner was at a local Döner kebab shop – an absolute must-try when in Berlin.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Day 2: History Comes Alive</h3>
                        <p className="ml-10 mb-4">The day was dedicated to the city&apos;s turbulent history. I started at the Brandenburg Gate, a symbol of unity and peace, before heading to the Berlin Wall Memorial. Walking alongside remnants of the Wall, I felt the weight of Berlin&apos;s divided past. The Checkpoint Charlie Museum provided further insights into the Cold War era.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Day 3: Museum Island & Modern Art</h3>
                        <p className="ml-10 mb-4">Berlin boasts an impressive collection of museums. I began at Museum Island, losing myself in the ancient treasures of the Pergamon Museum. Later, the contemporary art at the Hamburger Bahnhof museum left me both intrigued and inspired.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Day 4: Venturing Beyond the City</h3>
                        <p className="ml-10 mb-4">A short train ride took me to Potsdam, home to the exquisite Sanssouci Palace. The palace gardens in spring bloom were a sight to behold. Returning to Berlin, I dined at a riverside restaurant, watching the sun set over the Spree.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Day 5: The Vibrant Berlin Nightlife</h3>
                        <p className="ml-10 mb-4">The day was reserved for relaxation at Tiergarten, Berlin&apos;s expansive central park. But as night fell, Berlin&apos;s famed nightlife beckoned. I danced the night away at a techno club in Friedrichshain, truly immersing myself in Berlin&apos;s modern beats.</p>

                        <h3 className="font-medium text-md mt-4 mb-2 ml-10">Final Thoughts:</h3>
                        <p className="ml-10">Berlin proved to be a delightful blend of old and new. Its resilience and transformation are evident in every corner. From its haunting history to its avant-garde art scene, Berlin promises an enriching experience for every traveler.</p>
                </div>

            </section>
            </div>

        </main>
    )
}

