/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/bitfancy
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end */
  siteUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
