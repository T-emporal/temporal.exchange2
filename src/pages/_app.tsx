import "@/styles/globals.css";

import { Poppins } from 'next/font/google'

import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>

      <ThemeProvider attribute="class">
        <main className="poppins.className">
          <Component {...pageProps} />
        </main>

      </ThemeProvider>

      <GoogleTagManager gtmId="GTM-KRVCD2GP" />
      <GoogleAnalytics gaId="G-JN63Q35Z7F" />
    </AppCacheProvider>

  );
}
