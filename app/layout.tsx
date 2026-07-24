import type { Metadata } from 'next'
import { Fragment_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import './globals.css'

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fragment-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bhuvesh Kumar | AI Engineer',
  description: 'Ex-Oracle software engineer now pursuing MTech in AI Systems full-time at NUS-ISS, interning as AI Engineer at Tosba Tech in Singapore.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png?v=2',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/portfolio-favicon.png?v=2',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fragmentMono.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background md:grid md:grid-cols-[260px_1fr]">
          <Sidebar />
          <div className="min-w-0">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
