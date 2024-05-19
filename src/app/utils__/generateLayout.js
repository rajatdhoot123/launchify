const generateLayout = ({
  ga_id = "",
  next_auth,
  post_hog = "",
  crisp_id = "",
  twak_to_id,
} = {}) => {
  return `
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { Providers } from "@/app/styles/next-theme";
${
  ga_id || crisp_id || post_hog || twak_to_id
    ? `import Script from "next/script"`
    : ""
}
${next_auth ? `import NextAuthProvider from "@/app/nextauth/provider"` : ""}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    ${
      crisp_id
        ? `<Script id="crisp_support_id">
        {\`window.$crisp=[];window.CRISP_WEBSITE_ID="\${process.env.NEXT_PUBLIC_CRISP_SUPPORT}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();\`}
      </Script>`
        : ""
    }
    ${
      twak_to_id
        ? ` <Script id="twak_to">
        {\`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/\${process.env.NEXT_PUBLIC_TWAK_TO}/1hq6q6gv3';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        \`}
      </Script>`
        : ""
    }
    ${
      post_hog
        ? `<Script id="post_hog">
        {\`
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('\${process.env.NEXT_PUBLIC_POST_HOG}',{api_host:'https://app.posthog.com'})
        \`}
      </Script>`
        : ""
    }
    ${
      ga_id
        ? `
        <>
      <Script
      src={\`https://www.googletagmanager.com/gtag/js?id=\${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}\`}
    />
    <Script id="google-analytics">
        {\`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '\${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    \`}
      </Script>
    </>
    `
        : ""
    }
      <body className={inter.className}>
      <Providers>
      ${
        next_auth
          ? "<NextAuthProvider>{children}</NextAuthProvider>"
          : "{children}"
      }
      </Providers>
      </body>
    </html>
      );
}    
`;
};

export default generateLayout;
