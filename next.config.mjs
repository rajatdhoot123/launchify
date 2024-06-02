import { withSentryConfig } from "@sentry/nextjs";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    rehypePlugins: [rehypeStringify],
  },
});

export default withSentryConfig(
  withMDX({
    async rewrites() {
      return [
        {
          source: "/blog/sitemap.xml",
          destination:
            "https://blogs-theta-six.vercel.app/blog/blog.launchify.club/sitemap.xml",
        },
        {
          source: "/blog",
          destination:
            "https://blogs-theta-six.vercel.app/blog/blog.launchify.club",
        },
        {
          source: "/blog/:path*",
          destination: "https://blogs-theta-six.vercel.app/blog/:path*",
        },
        {
          source: "/blog/blog-sitemap.xml",
          destination:
            "https://blogs-theta-six.vercel.app/blog/blog.launchify.club/sitemap.xml",
        },
        {
          source: "/ingest/static/:path*",
          destination: "https://us-assets.i.posthog.com/static/:path*",
        },
        {
          source: "/ingest/:path*",
          destination: "https://us.i.posthog.com/:path*",
        },
      ];
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  }),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "kwiktwik",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
