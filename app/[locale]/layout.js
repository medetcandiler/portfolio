import '../globals.css'
import { Roboto } from 'next/font/google'

import { ReduxProvider } from '../redux/provider'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Medetcan Diler | Developer',
  description: 'Frontend Developer | Passionate about creating captivating web experiences.',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    notFound();
  }
  return (
    <html className='scroll-smooth' lang={locale}>
      <body className={roboto.className}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <div className="app font-serif">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}