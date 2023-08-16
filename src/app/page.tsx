import Image from 'next/image'
import { dancing_script } from './layout'

export default function Home() {
  return (
<main>
    <section className='mb-20'>
    <h1 className={`${dancing_script.className} text-4xl md:text-5xl font-bold tracking-tighter -skew-y-3`} >Welcome to Wanderlust Chronicles</h1>
    </section>

    <section className="flex flex-col gap-3">
      <div>
          <p>Your passport to adventures unknown and tales untold. Whether you&apos;re a seasoned globetrotter or a dreamer planning your first escape, you&apos;ll find a world of inspiration here.</p>
      </div>

      <div>
          <h2 className={`${dancing_script.className} text-4xl md:text-3xl font-bold tracking-tighter m-4`}>Why Wander with Us?</h2>
          <ul>
              <li className="mb-2 ml-10"><strong>Real Stories, Real Travels:</strong> Journey with us through personal anecdotes, breathtaking photos, and local secrets.</li>
              <li className="mb-2 ml-10"><strong>Off-the-Beaten-Path:</strong> While we love the world&apos;s iconic sights, we also venture where few travelers tread.</li>
              <li className="mb-2 ml-10"><strong>Sustainable Adventures:</strong> We believe in traveling with a light footprint. Learn how to explore the world while cherishing and preserving its beauty.</li>
          </ul>
      </div>

      <div>
          <h2 className={`${dancing_script.className} text-4xl md:text-3xl font-bold tracking-tighter m-4`}>Latest Adventures</h2>
          <p className="mb-2 ml-10"> From beaches in Antigua, interailing in Europe, to the streets of Chicago, we bring you stories, photographs and guides from different corners of the globe.</p>
      </div>

    </section>
</main>

  )
}
