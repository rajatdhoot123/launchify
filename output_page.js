import Navbar1 from "@/app/components/navbar/variant-1";
import Hero1 from "@/app/components/hero/variant-1";
import Pricing1 from "@/app/components/pricing/variant-1";
import Script from "next/script";

export default function Home() {
  return (
    <>
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
      <div className="w-full overflow-scroll">
        <Navbar1 />
        <Hero1 />
        <Pricing1 />
      </div>
    </>
  );
}
