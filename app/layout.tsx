import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Prince Adimado's Portfolio Website",
  description: 'Portfolio Website of Prince Adimado,  a Software Developer.',
  icons: {
    icon: 'app/icon2.png'
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
