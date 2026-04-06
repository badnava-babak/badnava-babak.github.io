import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Babak Badnava — AI/ML Engineer & Researcher',
  description:
    'PhD in Computer Science. AI/ML consulting, ML pipeline development, and AI product prototyping. Expertise in reinforcement learning, edge computing, and intelligent systems.',
  keywords: [
    'machine learning',
    'AI consulting',
    'reinforcement learning',
    'edge computing',
    'ML pipeline',
    'Babak Badnava',
    'AI engineer',
  ],
  authors: [{ name: 'Babak Badnava' }],
  openGraph: {
    title: 'Babak Badnava — AI/ML Engineer & Researcher',
    description:
      'PhD in Computer Science. AI/ML consulting, ML pipeline development, and AI product prototyping.',
    type: 'website',
    url: 'https://badnava-babak.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
