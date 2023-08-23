
import { dancing_script } from '@/app/layout'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";


export default function Header() {
  return (

    // NEED TO STYLE THE NAV IN THE TOP LEFT
    <header className="grid text-center mb-10">
        <nav className="m-7">
            <ul className="flex gap-x-10">
                <li className="hover:cursor-pointer hover:underline-offset-8 decoration-4 decoration-teal hover:underline"><Link href="/">🏠 <span>Home</span> 🏠</Link></li>
                <li className="hover:cursor-pointer hover:underline-offset-8 decoration-4 decoration-teal hover:underline"><Link href="/blog">🌎 <span>Blog Posts</span> 🌎</Link></li>
                <li><UserButton afterSignOutUrl="/"/> </li>
            </ul>
        </nav>
        <div className="inline-block relative pb-2">
            <h1 className={`${dancing_script.className} text-5xl md:text-8xl font-bold tracking-tighter -skew-y-3 `}>Wanderlust Chronicles</h1>
            <p className={`${dancing_script.className} text-xl md:text-2xl mt-4 mb-8 hover:cursor-pointer`}><Link href="/blog">🌍 <span className="italic"><strong>Explore. Dream. Discover.</strong></span> 🌍</Link></p>
            <div className="absolute inset-x-0 bottom-0 border-b-4 border-teal inline-block"></div>
        </div>
    </header>

    


  )
}
