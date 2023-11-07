import '../globals.css'
import { Roboto } from 'next/font/google'

import { ReduxProvider } from '../redux/provider'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import DarkModeToggler from '../components/DarkModeToggler/DarkModeToggler';

import Background from '../components/Background/Background';

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
      <body className={`${roboto.className} transition duration-300 dark:bg-[#000] dark:text-[#f2f2f2] `}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <Background />
            <div className="app font-serif">
              <Navbar />
              <DarkModeToggler />
              {children}
              <Footer />
            </div>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
