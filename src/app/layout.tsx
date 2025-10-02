// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Script from "next/script";
import DisclaimerModal from "@/app/components/DisclaimerModal";

export const metadata: Metadata = {
  title: "Implantologia Leone",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7R9L10XEY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X7R9L10XEY', {
              anonymize_ip: true,
              send_page_view: true
            });
          `}
        </Script>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* CSS esterni */}
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qxk4lzc.css" />



       
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '788727910402752');
            fbq('track', 'PageView');
          `}
        </Script>
     


      </head>

      <body>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=788727910402752&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>



        {/* Disclaimer valido site-wide (una volta accettato non ricompare) */}
        <DisclaimerModal />

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />

        {/* JS esterni */}
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
