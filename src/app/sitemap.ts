import { MetadataRoute } from "next";

const STATIC_ROUTES = [
  "/",
  "/auth/authenticated",
  "/auth/signin",
  "/editor",
  "/extension/auth/callback",
  "/extension/auth/callback/extension",
  "/extension/auth/confirm",
  "/extension/login",
  "/extension/login/error",
  "/handle_export",
  "/icon.png",
  "/opengraph-image.png",
  "/privacy-policy",
  "/stripe-with-checkout",
  "/terms-condition",
  "/with-template",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: route,
    lastModified: new Date(),
    priority: 1,
  }));
}
