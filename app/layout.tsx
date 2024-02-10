import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthur Miranda Portifolio',
  description: 'My personal portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-1300`}>{children}</body>
    </html>
  )
}
