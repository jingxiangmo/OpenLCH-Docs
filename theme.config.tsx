import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const siteHost = "docs.zeroth.bot";
const siteUrl = `https://${siteHost}`;
const siteSocialUrl = `${siteUrl}/social.png`;
const siteDesc = `Powerful, affordable, and open-source robotics platform for builders.`;
const siteTitle = "Zeroth Bot Docs";

const config: DocsThemeConfig = {
  logo: <span>Zeroth Bot Docs</span>,
  project: {
    link: "https://github.com/zeroth-robotics/zeroth-bot",
  },
  chat: {
    link: "https://discord.gg/G6KP76uha5",
  },
  docsRepositoryBase: "https://github.com/zeroth-robotics/docs/tree/main",
  editLink: {
    content: "Edit this page on GitHub",
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 2,
  },
  head: function useHead() {
    const config = useConfig();
    const { asPath } = useRouter();
    const isIndex = asPath === "/";
    const title =
      config?.title && !isIndex ? `${config.title} - ${siteTitle}` : siteTitle;

    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />

        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta name="twitter:description" content={siteDesc} />

        <meta property="og:site_name" content={siteTitle} />
        <meta name="apple-mobile-web-app-title" content={siteTitle} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={siteSocialUrl} />
        <meta name="og:image" content={siteSocialUrl} />

        <meta property="twitter:domain" content={siteHost} />
        <meta name="twitter:site:domain" content={siteHost} />

        <meta name="twitter:url" content={siteUrl} />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <title>{title}</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />

        <style>
          {`
          ul.nx-mt-6 {
            margin-top: 0;
          }
          `}
        </style>
      </>
    );
  },
  footer: {
    component: null,
  },
};

export default config;
