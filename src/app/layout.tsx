import Link from 'next/link';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '태윤 블로그',
    template: '태윤 블로그 | %s',
  },
  description: 'Next.js(13) 으로 제작한 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col max-w-7xl mx-auto'>
        <Header />
        <main className=' grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
