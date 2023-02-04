import Head from "next/head";
import "../assets/css/styles.css";

export default function Docs({ Component, pageProps }) {
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
