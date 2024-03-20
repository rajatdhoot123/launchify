const env =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "production"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "preview"
    : "development";

export const VA_360_LINK_HOST = {
  production: "blog.va360.club",
  preview: `link---${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  development: "va360-blog.localhost:3000",
}[env];

export const UI_WIDGET_LINK_HOST = {
  production: "blog.uiwidgets.store",
  preview: `link---${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  development: "uiwidgets-blog.localhost:3000",
}[env];

export const APP_HOST = {
  production: "blog.kwiktwik.com",
  preview: process.env.NEXT_PUBLIC_VERCEL_URL,
  development: "localhost:3000",
}[env];

export const PROTOCOL = env === "development" ? "http://" : "https://";
