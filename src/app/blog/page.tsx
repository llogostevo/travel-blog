import Link from "next/link";
import { dancing_script } from "../layout";
import Image from "next/image";

export default function Blog() {
    return (
        <main className="min-h-screen">

            <section className='mb-20'>
                <h1 className={`${dancing_script.className} text-4xl md:text-5xl font-bold tracking-tighter -skew-y-3`} >Blog Posts</h1>
            </section>

            <section>
                <h2 className={`font-bold text-lg md:text-xl mb-4`}>✈️ Your Next Adventure Awaits! ✈️</h2>
                <p className="mb-2 ml-10">Dive deep into our travel guides, tips, and tales. Whether you&apos;re looking for the next best place to dine in Paris, or trekking routes in the Andes, we&apos;ve got you covered. So grab your map, pack your bags, and let&apos;s embark on a journey together!</p>
            </section>

            <section className="flex flex-wrap justify-between">


                <div className="bg-white shadow-md hover:shadow-lg hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 m-4 p-5 w-1/4">
                    <Link className="flex flex-col items-center gap-10" href="/blog/1">
                        <h2 className={`${dancing_script.className} text-3xl font-bold`}>Berlin</h2>
                        <Image
                            className="rounded"
                            src="/images/berlin.jpg"
                            height={200}
                            width={200}
                            alt="Blog Post Image"
                        />
                        <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem error dolor corrupti facilis praesentium ex ad? Non blanditiis ea omnis, asperiores...</p>
                    </Link>
                </div>

                <div className="bg-white shadow-md hover:shadow-lg hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 m-4 p-5 w-1/4">
                    <Link className="flex flex-col items-center gap-10" href="/blog/1">
                        <h2 className={`${dancing_script.className} text-3xl font-bold`}>Paris</h2>
                        <Image
                            className="rounded"
                            src="/images/paris.jpg"
                            height={200}
                            width={200}
                            alt="Blog Post Image"
                        />
                        <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem error dolor corrupti facilis praesentium ex ad? Non blanditiis ea omnis, asperiores...</p>
                    </Link>
                </div>

                <div className="bg-white shadow-md hover:shadow-lg hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 m-4 p-5 w-1/4">
                    <Link className="flex flex-col items-center gap-10" href="/blog/1">
                        <h2 className={`${dancing_script.className} text-3xl font-bold `}>Milan</h2>
                        <Image
                            className="rounded"
                            src="/images/milan.jpg"
                            height={300}
                            width={300}
                            alt="Blog Post Image"
                        />
                        <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem error dolor corrupti facilis praesentium ex ad? Non blanditiis ea omnis, asperiores...</p>
                    </Link>
                </div>




            </section>



        </main>
    )
}
