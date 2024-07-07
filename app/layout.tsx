import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://prince-adimado.vercel.app'),
  title: "Prince Adimado | Software Developer",
  description: "Prince Adimado's Portfolio Website .",
  icons: {
    icon: 'icon/icon.png'
  },
  openGraph: {
    title: "Prince Adimado | Software Developer",
    description: "Prince Adimado | Software Developer",
    images: '/opengraph-image.png'
  },
  twitter: {
    title: "Prince Adimado | Software Developer",
    description: "Prince Adimado's Portfolio Website",
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
