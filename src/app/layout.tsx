import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-montserrat' 
})

export const metadata: Metadata = {
  title: 'SBC House | Commercial Property Solutions | Offices, Storage & Workshop Units',
  description: 'SBC House offers secure, high-specification commercial real estate solutions including fully serviced storage units and furnished office suites for businesses in Sutton.',
  keywords: 'SBC House, commercial property, office space, storage units, business accommodation, Sutton Business Centre, virtual office, workspace solutions, business centre',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 