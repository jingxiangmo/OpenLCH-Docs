import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

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
    text: 'Zeroth Robotics, made with ❤️ by JX, Denys, Kelsey, and friends.',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.zeroth.bot' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={'Zeroth Robotics Docs'} />
        <meta property="og:description" content={'powerful, affordable, and open-source robotics platform for builders'} />
      </>
    );
  }
}

export default config
