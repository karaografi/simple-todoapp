import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple Todo app',
  description: 'Simple Todo App for Learning next js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
