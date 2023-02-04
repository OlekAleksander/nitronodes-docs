import Head from "next/head";
import "../assets/css/styles.css";
import "@fontsource/clear-sans/500.css";
import { Router } from "next/router";
import NProgress from "nprogress";
import setCookie from "next-cookies";

export default function Docs({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done(false);
  });
  setCookie("theme", "dark");
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/logo.ico" />
        <meta
          property="og:description"
          content="The documentation for NitroNodes"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
