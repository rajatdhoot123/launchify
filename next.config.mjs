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
  experimental: {
    serverActions: {
      allowedOrigins: "extension.launchify.club"
    }
  },
  async rewrites() {
    return [
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
        destination:
          "https://extension.launchify.club/extension",
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
