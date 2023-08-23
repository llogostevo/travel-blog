import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

import { Dancing_Script } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })
export const dancing_script = Dancing_Script({ subsets: ['latin'],})


import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Wanderlust Chronicles',
  description: "Wanderlust Chronicles - Dive into a world of exploration and inspiration. From hidden gems to iconic locales, join us on journeys across the globe. Whether you're a seasoned traveler or just starting your adventure, find the best tips, stories, and guides here. Explore. Dream. Discover.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

      <html lang="en">
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <body className={inter.className}>
          <Header />

          {children}

          <Footer />
          </body>
      </html>

    </ClerkProvider>

  )
}
