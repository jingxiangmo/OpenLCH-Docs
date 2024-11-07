import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const siteTitle = 'Zeroth Robotics Docs';

const config: DocsThemeConfig = {
  logo: <span>Zeroth Robotics Docs</span>,
  project: {
    link: 'https://github.com/Zeroth-Robotics/OpenLCH',
  },
  chat: {
    link: 'https://discord.gg/aHTY4ur4',
  },
  docsRepositoryBase: 'https://github.com/jingxiangmo/openlch-docs/tree/main',
  footer: {
    text: 'zeroth robotics, made with ❤️ by JX, Denys, Kelsey, and friends',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.zeroth.bot' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const isIndex = asPath === "/";
    const title = frontMatter.title && !isIndex ? `${frontMatter.title} - ${siteTitle}` : siteTitle;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || siteTitle} />
        <meta property="og:description" content={frontMatter.description || 'powerful, affordable, and open-source robotics platform for builders'} />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />
        <meta name="description" content={frontMatter.description || 'powerful, affordable, and open-source robotics platform for builders'} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </>
    );
  }
}

export default config
