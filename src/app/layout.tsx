import type { Metadata } from "next";
import './globals.css';
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Implantologia Leone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7R9L10XEY"
          strategy="afterInteractive"
          async
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




        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width,
                   initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
        />
        <link
            rel="stylesheet"
            href="https://use.typekit.net/qxk4lzc.css"
        ></link>
    </head>
    <body>
    <Header/>
    <main className="pt-20">
        {children}
    </main>
    <Footer/>
    <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"/>
    </body>
    </html>
  );
}
