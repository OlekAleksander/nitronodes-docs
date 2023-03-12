import Head from "next/head";
import { ThemeProvider } from 'next-themes';
import "../assets/css/styles.css";
import "@fontsource/clear-sans/500.css";
import { Router } from "next/router";
import NProgress from "nprogress";
import setCookie from "next-cookies";
import {useEffect} from "react";
export default function Docs({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done(false);
  });
 
useEffect(() => {
 //@ts-ignore
    setCookie("theme", "dark");
  }, []);
  
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/logo.ico" />
        <meta property="og:locale" content="en_UK" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://docs.nitronodes.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_UK" />
        <meta property="og:site_name" content="NitroNodes Documentation" />
        <link rel="canonical" href="https://docs.nitronodes.xyz" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="NitroNodes Documentation" />
        <meta
          property="og:description"
          content="The documentation for NitroNodes"
        />
      </Head>
       <ThemeProvider forcedTheme={"dark"}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
Docs.theme = 'dark'
