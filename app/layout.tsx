import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Your Name — Mathematics & Computing',
  description: 'Personal portfolio of a mathematics student with a passion for computation, research, and problem-solving.',
  openGraph: {
    title: 'Your Name — Mathematics & Computing',
    description: 'Personal portfolio of a mathematics student with a passion for computation, research, and problem-solving.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-ink-50 text-ink-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
