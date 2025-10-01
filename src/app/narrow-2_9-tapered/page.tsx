import MinMax from "@/app/components/minMax";
import ProtocolloSemplificato from "@/app/components/protocolloSemplificato";
import Tabella29 from '@/../public/2.9mm-table.png'
import Image from "next/image";


// app/narrow-2_9-tapered/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://implantologia.leone.it"),
  title: "XCN® Narrow 2.9 Tapered – Protocollo chirurgico semplificato | Leone",
  description:
    "Scopri il protocollo chirurgico semplificato per l’impianto XCN® Narrow 2.9 Tapered: design avanzato, stabilità primaria anche in osso compromesso e casi clinici illustrati.",
  keywords: [
    "XCN Narrow 2.9",
    "impianto 2.9",
    "impianti dentali stretti",
    "protocollo chirurgico semplificato",
    "implantologia Leone",
    "minima invasività",
    "creste atrofiche",
    "osso D2 D3 D1 D4"
  ],
  applicationName: "Implantologia Leone",
  authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
  creator: "Leone",
  publisher: "Leone",
  category: "Salute",
  alternates: {
    canonical: "https://implantologia.leone.it/narrow-2_9-tapered",
    languages: {
      "it-IT": "https://implantologia.leone.it/narrow-2_9-tapered"
    }
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Implantologia Leone",
    url: "https://implantologia.leone.it/narrow-2_9-tapered",
    title: "XCN® Narrow 2.9 Tapered – Protocollo chirurgico semplificato",
    description:
      "Protocollo chirurgico avanzato per l’impianto XCN® Narrow 2.9 Tapered: progettato per massimizzare stabilità in vari tipi di osso, anche nelle condizioni anatomiche difficili.",
    images: [
      {
        url: "/narrow-29.jpg",
        width: 1200,
        height: 630,
        alt: "XCN® Narrow 2.9 Tapered"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "XCN® Narrow 2.9 Tapered – Protocollo chirurgico semplificato",
    description:
      "Design innovativo e protocollo semplificato per l'impianto Narrow 2.9 – stabilità anche in spazi angusti e osso compromesso.",
    images: ["/narrow-29.jpg"]
  }
};






export default function TwoNine() {
    return (
        <>
        <div className="px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
                <MinMax />
            </div>
            <div className="container margin mx-auto px-4 ">
                <Image className="lg:w-1/2 mt-20" src={Tabella29} alt={"tabella-29"} />
            </div>
        <div className="margin">
            <ProtocolloSemplificato />
        </div>
        </>
    )
}