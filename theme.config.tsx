import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        alt="logo"
        src={"https://www.nitronodes.xyz/assets/img/logo.png"}
        width={32}
        height={32}
      />
      &nbsp;&nbsp;
      <h2 style={{ fontWeight: "bold" }}>NitroNodes</h2>
    </>
  ),
  footer: {
    text: "OlekAleksander 2023",
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: false,
  chat: {
    link: "https://nitronodes.xyz/discord",
  },
  primaryHue: 259,
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: "NitroNodes - %s",
    };
  },
  docsRepositoryBase:
    "https://github.com/OlekAleksander/nitronodes-docs/blob/main/",
};

export default config;
