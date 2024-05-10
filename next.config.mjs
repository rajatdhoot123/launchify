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

export default withMDX({
  async headers() {
    return [
      {
        // matching all API routes
        source: "/handle_export_with_copy",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
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
        source: "/extension",
        destination: "https://extension.launchify.club/extension",
      },
      {
        source: "/extension/:path*",
        destination: "https://extension.launchify.club/extension/:path*",
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
});
