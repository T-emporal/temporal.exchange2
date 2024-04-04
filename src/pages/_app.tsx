import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>

  );
}
