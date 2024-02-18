import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { Providers } from "@/app/styles/next-theme";
import Script from "next/script";
import NextAuthProvider from "@/app/nextauth/provider";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import NavBar from "@/app/__landingcomponents__/navbar/variant-2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.uiwidgets.store"),
  title: {
    default:
      "Tailwind and Next.js UI Components for Speedy Web Development - UIWidgets.store",
  },
  description:
    "Get started quickly with our UI components for Tailwind and Next.js. Streamline your web development and build stunning applications with our pre-configured templates.",
  openGraph: {
    title:
      "Tailwind and Next.js UI Components for Speedy Web Development - UIWidgets.store",
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
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(AUTH_OPTIONS);
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
        <Providers>
          <NextAuthProvider>
            <NavBar session={session} />
            {children}
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
