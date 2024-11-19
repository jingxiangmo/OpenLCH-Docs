/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://docs.zeroth.bot",
  generateRobotsTxt: true,
  changefreq: "daily",
  additionalPaths: async () => [
    {
      loc: "/",
      priority: 1,
      changefreq: "daily",
      lastmod: new Date().toISOString(),
    },
  ],
};
