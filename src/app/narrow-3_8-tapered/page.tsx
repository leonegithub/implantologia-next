import OneForAll from "@/app/components/oneForAll";
import ProtocolloSemplificatoDue from "@/app/components/protocolloSemplificatoDue";
import Tabella38 from '@/../public/3.8mm-table.png'
import Image from "next/image";


// app/narrow-3_8-tapered/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://implantologia.leone.it"),
  title: "XCN® Narrow 3.8 Tapered – Protocollo chirurgico semplificato | Leone",
  description:
    "Scopri l’implanto XCN® Narrow 3.8 Tapered: diametro ridotto, connessione Morse autobloccante, protocollo chirurgico semplificato per garantire stabilità anche in spazi ridotti.",
  keywords: [
    "XCN 3.8",
    "impianto 3.8",
    "impianti dentali stretti",
    "protocollo chirurgico",
    "implantologia Leone",
    "vaso Morse",
    "connessione autobloccante",
    "spazi ridotti",
    "stabilità primaria"
  ],
  applicationName: "Implantologia Leone",
  authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
  creator: "Leone",
  publisher: "Leone",
  category: "Salute",
  alternates: {
    canonical: "https://implantologia.leone.it/narrow-3_8-tapered",
    languages: {
      "it-IT": "https://implantologia.leone.it/narrow-3_8-tapered"
    }
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Implantologia Leone",
    url: "https://implantologia.leone.it/narrow-3_8-tapered",
    title: "XCN® Narrow 3.8 Tapered – Protocollo chirurgico semplificato",
    description:
      "Il sistema XCN® Narrow 3.8 Tapered offre diametro compatto, connessione Morse autobloccante e un protocollo semplificato per elevata stabilità anche in spazi anatomici complessi.",
    images: [
      {
        url: "/narrow-38.jpg",
        width: 1200,
        height: 630,
        alt: "XCN® Narrow 3.8 Tapered – Leone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "XCN® Narrow 3.8 Tapered – Protocollo chirurgico semplificato | Leone",
    description:
      "Connessione Morse autobloccante e protocollo semplificato per l’impianto Narrow 3.8 – stabilità anche in spazi limitati.",
    images: ["/narrow-38.jpg"]
  }
};





export default function ThreeEight() {
    return (
        <>
            <div className="mb-10 px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
                <OneForAll />
            </div>
            <div className="container margin mx-auto px-4">
                <Image className="lg:w-1/2" src={Tabella38} alt={"tabella-29"} />
            </div>
            <div className="margin">
                <ProtocolloSemplificatoDue />
            </div>
        </>
    )
}