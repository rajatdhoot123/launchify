import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Tailwind and Next.js UI Components for Speedy Web Development - UIWidgets.store",
  },
  description:
    "Get started quickly with our UI components for Tailwind and Next.js. Streamline your web development and build stunning applications with our pre-configured templates.",
  openGraph: {
    images: ["/opengraph-image.jpeg"],
    title: {
      default:
        "Tailwind and Next.js UI Components for Speedy Web Development - UIWidgets.store",
    },
    description:
      "Supercharge your web development with our Tailwind and Next.js UI components. Create responsive and stylish web applications faster and more efficiently.",
  },
  keywords:
    "UI components, Tailwind, Next.js, web development, responsive design, web applications, speedy development",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#fff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
          </Script>
        </>
      )}
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
