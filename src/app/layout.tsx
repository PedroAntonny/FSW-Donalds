import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'

import { CardProvider } from './[slug]/menu/context/card'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FSW Donalds',
  description: 'Comida caseira, feita com carinho!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        <CardProvider>
          {children}
        </CardProvider>

        <Toaster />
      </body>
    </html>
  )
}
