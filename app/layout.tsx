import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Prince Adimado's Portfolio",
  description: 'This website is the Portfolio website for Prince Adimado. Prince Adimado is a Software Developer.'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics 
                ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
          />

        ): null}

        {children}
      </body>
    </html>
  )
}
