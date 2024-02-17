const generateLayout = ({ ga_id = "", next_auth, crisp_id }) => {
  return `
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { Providers } from "@/app/styles/next-theme";
${ga_id ? `import Script from "next/script"` : ""}
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
