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
import { subscriptions, templates } from "@/lib/database/schema";
import { Inter } from "next/font/google";
import { eq } from "drizzle-orm";
import { AI } from "./(ai)/action";

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
  let paid_templates = [];
  if (user) {
    const [get_user, get_templates] = await Promise.all([
      db.select().from(subscriptions).where(eq(subscriptions.email_id, user)),
      db.select().from(templates).where(eq(templates.email_id, user)),
    ]);

    paid_templates = get_templates;
    current_user = get_user.find((u) => u.email_id === user);
  }

  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_TWAK_TO && (
        <Script id="twak">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TWAK_TO}/1hq6q6gv3';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      )}
      {process.env.NEXT_PUBLIC_POST_HOG && (
        <Script id="post-hog">
          {`  
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('${process.env.NEXT_PUBLIC_POST_HOG}',{api_host:'https://app.posthog.com'})
          `}
        </Script>
      )}
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
        <AI>
          <Providers themes={["pink", "light", "dark"]}>
            <NextAuthProvider>
              <ConfigProvider
                initialState={{
                  is_active: current_user?.is_active ?? false,
                  session: session ?? null,
                }}
              >
                <NavBar session={session} />
                {children}
              </ConfigProvider>
            </NextAuthProvider>
          </Providers>
        </AI>
        <Toaster />
      </body>
    </html>
  );
}
