import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { Providers } from "@/app/styles/next-theme";
import Script from "next/script";
import NextAuthProvider from "@/app/nextauth/provider";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import NavBar from "@/app/landingcomponent/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ConfigProvider } from "@/app/__context/ConfigContext";
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.launchify.club"),
  title: {
    default:
      "Tailwind and Next.js UI Components for Speedy Web Development - boilercode.app",
  },
  description:
    "Get started quickly with our UI components for Tailwind and Next.js. Streamline your web development and build stunning applications with our pre-configured templates.",
  openGraph: {
    title:
      "Tailwind and Next.js UI Components for Speedy Web Development - boilercode.app",
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

  const user = session?.user?.email ?? null;

  let current_user = null;
  if (user) {
    const get_user = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.email_id, user));

    current_user = get_user.find((u) => u.email_id === user);
  }

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
        <Providers themes={["pink", "light", "dark"]}>
          <NextAuthProvider>
            <ConfigProvider
              initialState={{ is_active: current_user?.is_active ?? false }}
            >
              <NavBar session={session} />
              {children}
            </ConfigProvider>
          </NextAuthProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
