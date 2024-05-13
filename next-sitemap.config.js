module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.launchify.club",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: "public/new-sitemaps",
  additionalPaths: async (config) => {
    return [
      { loc: "/extension" },
      { loc: "/with-template" },
      { loc: "/editor" },
      { loc: "/stripe-with-checkout" },
    ];
  },
};
