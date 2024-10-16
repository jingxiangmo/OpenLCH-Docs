import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>OpenLCH Docs</span>,
  project: {
    link: 'https://github.com/Zeroth-Robotics/OpenLCH',
  },
  chat: {
    link: 'https://discord.com/invite/kscale',
  },
  docsRepositoryBase: 'https://github.com/jingxiangmo/openlch-docs/tree/main',
  footer: {
    text: 'OpenLCH, a K-Scale Labs project.',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.kscale.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={'OpenLCH Docs'} />
        <meta property="og:description" content={'OpenLCH is an open source humanoid building guide'} />
      </>
    );
  }
}

export default config
