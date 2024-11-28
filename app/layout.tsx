import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://prince-adimado.vercel.app'),
  title: "Prince Adimado - Software Developer",
  description: "Prince Adimado's Portfolio Website .",
  icons: {
    icon: 'icon/icon.png'
  },
  openGraph: {
    title: "Prince Adimado - Software Developer",
    description: "Prince Adimado's Portfolio Website",
    images: '/opengraph-image.png'
  },
  twitter: {
    title: "Prince Adimado - Software Developer",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V8B817QHE5"></Script>
        <Script id='google-analytics' strategy='afterInteractive'>
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-V8B817QHE5');
            `
          }
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
