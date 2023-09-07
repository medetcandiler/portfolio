import './globals.css'
import { Roboto  } from 'next/font/google'

import { ReduxProvider } from './redux/provider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Medetcan Diler | Developer',
  description: 'Frontend Developer | Passionate about creating captivating web experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={roboto.className}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <ReduxProvider>
          <div className="app font-serif">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
