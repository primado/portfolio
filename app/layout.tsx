import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://prince-adimado.vercel.app'),
  title: "Prince Adimado's Portfolio Website",
  description: "Prince Adimado is Software Developer.",
  icons: {
    icon: 'icon/icon.png'
  },
  openGraph: {
    title: "Prince Adimado's Portfolio Website",
    description: "Prince Adimado is a Software Developer.",
    images: '/opengraph-image.png'
  },
  twitter: {
    title: "Prince Adimado's Portfolio Website",
    description: "Prince Adimado is a Software Developer.",
    images: '/twitter-image.png'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.GOOGLE_ANALYTICS_kEY ? (
          <GoogleAnalytics 
                ga_id={process.env.GOOGLE_ANALYTICS_KEY}
          />

        ): null}

        {children}
      </body>
    </html>
  )
}
