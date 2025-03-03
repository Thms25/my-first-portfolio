import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas Allen',
  description: "Thomas Allen's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-dark">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
