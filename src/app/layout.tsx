// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Script from "next/script";
import DisclaimerModal from "@/app/components/DisclaimerModal";

export const metadata: Metadata = {
    metadataBase: new URL("https://implantologia.leone.it"),
    title: "Connessione cono Morse autobloccante – Tenuta e stabilità meccanica | Leone",
    description:
        "Scopri i vantaggi della connessione cono Morse autobloccante: sigillo contro le infiltrazioni batteriche, riduzione dei micromovimenti, stabilità meccanica e gestione ottimale dei tessuti con Platform Switching.",
    keywords: [
        "cono Morse autobloccante",
        "connessione impianto-protesi",
        "sigillo batterico",
        "stabilità meccanica",
        "micromovimenti",
        "platform switching",
        "MUA",
        "ExaConnect",
        "implantologia Leone",
        "impianti XCN"
    ],
    applicationName: "Implantologia Leone",
    authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
    creator: "Leone",
    publisher: "Leone",
    category: "Salute",
    alternates: {
        canonical: "https://implantologia.leone.it/cono-morse-autobloccante",
        languages: {
            "it-IT": "https://implantologia.leone.it/cono-morse-autobloccante"
        }
    },
    openGraph: {
        type: "website",
        locale: "it_IT",
        siteName: "Implantologia Leone",
        url: "https://implantologia.leone.it/cono-morse-autobloccante",
        title: "Connessione cono Morse autobloccante – Tenuta e stabilità meccanica",
        description:
            "Sigillo efficace contro le infiltrazioni batteriche e massima stabilità dell’interfaccia impianto-protesi. Scopri come il cono Morse autobloccante migliora l’affidabilità clinica e la gestione dei tessuti molli.",
        images: [
            {
                url: "/og-home.jpg", // 1200x630 consigliato, metti il file in /public/og/
                width: 1200,
                height: 630,
                alt: "Connessione cono Morse autobloccante – Implantologia Leone"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Connessione cono Morse autobloccante – Tenuta e stabilità meccanica | Leone",
        description:
            "Riduzione dei micromovimenti, sigillo antibatterico e Platform Switching: i vantaggi della connessione cono Morse Leone.",
        images: ["/og-home.jpg"]
    }
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
