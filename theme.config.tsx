import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const siteTitle = 'Zeroth Robotics Docs';
const siteDescription = 'Powerful, affordable, and open-source robotics platform for builders';
const siteUrl = 'https://docs.zeroth.bot';

const config: DocsThemeConfig = {
  logo: <span>Zeroth Bot Docs</span>,
  project: {
    link: 'https://github.com/Zeroth-Robotics/OpenLCH',
  },
  chat: {
    link: 'https://discord.gg/aHTY4ur4',
  },
  docsRepositoryBase: 'https://github.com/jingxiangmo/openlch-docs/tree/main',
  footer: {
    text: 'made with ❤️ by JX, Denys, Kelsey, and friends',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      siteUrl +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const isIndex = asPath === "/";
    const title = frontMatter.title || siteTitle;
    const description = frontMatter.description || siteDescription;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta property="og:site_name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />

        <meta property="og:url" content={url} />
        <meta name="twitter:url" content={url} />

        <meta name="twitter:card" content="summary" />

        <title>{title}</title>
      </>
    );
  },
};

export default config;
