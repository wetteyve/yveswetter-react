import '@/styles/globals.css';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import Head from 'next/head';
import Image from 'next/image';

import logo from '../assets/logos/logo_3d_background.svg';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:image' content='https://yveswetter.ch/android-chrome-192x192.png' />
      </Head>
      <Navbar />
      <div className='flex-grow' id='app'>
        <div className='container xl:mx-auto'>
          <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10'>
            <Image priority src={logo} alt='logo' className='opacity-[0.08] w-auto xl:w-[800px]' />
          </div>
        </div>
        <div className='p-5 pb-0 container mx-auto'>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
