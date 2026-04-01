import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bhuvesh Kumar | AI/ML Engineer',
  description: 'Ex-Oracle software engineer now pursuing MTech in AI Systems full-time at NUS-ISS, building toward dedicated AI/ML engineering roles.',
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
