import Link from 'next/link'
import { dancing_script } from './layout'

export default function NotFound() {
  return (
    <main>
      
      <section className='mb-20 text-center'>
        <h1 className={`${dancing_script.className} text-4xl md:text-5xl font-bold tracking-tighter -skew-y-3`} ><span className=" text-center text-9xl mx-4">🗺️</span>Lost in the 404<span className=" text-center text-9xl mx-4">🗺️</span></h1>
        
      </section>
      <p className={`${dancing_script.className} mb-20 text-3xl text-center`}>🗺️ Oh no!!! you have wandered off the map!! 🗺️</p>
      <section className="flex flex-col justify-center content-center gap-3 ">
            <ul className="flex gap-x-10">
                <li className="hover:cursor-pointer hover:underline-offset-8 decoration-4 decoration-teal hover:underline"><Link href="/">🏠 <span>Go Home</span> 🏠</Link></li>
                <li className="hover:cursor-pointer hover:underline-offset-8 decoration-4 decoration-teal hover:underline"><Link href="/blog">🌎 <span>Go to Blog Posts</span> 🌎</Link></li>
            </ul>
        
      </section>
    </main>
  )
}