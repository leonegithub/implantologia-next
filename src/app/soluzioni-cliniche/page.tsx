import one from '@/../public/1.png'
import two from '@/../public/2.png'
import three from '@/../public/3.png'
import four from '@/../public/4.png'
import ConnectionComponent from "@/app/components/connectionComponent";


// app/soluzioni-cliniche/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://implantologia.leone.it"),
  title: "Soluzioni cliniche – Casi reali con XCN® Tapered | Leone",
  description:
    "Esplora i casi clinici reali trattati con gli impianti XCN® Tapered: gestione di creste sottili, post-estrattivi, carico immediato e riabilitazioni complesse. Video procedure e documentazione scaricabile.",
  keywords: [
    "casi clinici implantologia",
    "soluzioni cliniche",
    "impianti XCN",
    "cono Morse",
    "carico immediato",
    "post-estrattivo",
    "creste atrofiche",
    "riabilitazione mascellare",
    "Leone"
  ],
  applicationName: "Implantologia Leone",
  authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
  creator: "Leone",
  publisher: "Leone",
  category: "Salute",
  alternates: {
    canonical: "https://implantologia.leone.it/soluzioni-cliniche",
    languages: {
      "it-IT": "https://implantologia.leone.it/soluzioni-cliniche"
    }
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Implantologia Leone",
    url: "https://implantologia.leone.it/soluzioni-cliniche",
    title: "Soluzioni cliniche – Casi reali con XCN® Tapered",
    description:
      "Selezione di casi clinici con impianti XCN® Tapered: stabilità primaria elevata, gestione dei tessuti e workflow digitale. Scarica i PDF e guarda le procedure.",
    images: [
      {
        url: "/og-home.jpg", // 1200x630 consigliato in /public/og/
        width: 1200,
        height: 630,
        alt: "Soluzioni cliniche – Implantologia Leone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluzioni cliniche – Casi reali con XCN® Tapered | Leone",
    description:
      "Casi documentati, video e materiali scaricabili sugli impianti XCN® Tapered per diverse indicazioni cliniche.",
    images: ["/og-home.jpg"]
  }
};






export default function SoluzioniCliniche() {
    return (
        <div className="container mx-auto px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">


                <div className="grid grid-cols-12">
                    <div className="col col-span-12 md:col-span-12 lg:col-span-7">
                    <h4 className="red text-3xl">Perché scegliere gli  <span className="font-bold">Impianti XCN® </span>
                       Tapered con <span className="font-bold">connessione cono Morse autobloccante</span>?</h4>
                    </div>
                </div>




            <div className="elenco-container mt-15">
                <div className="md:grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <ConnectionComponent text="Mantiene intatta la salute dei tessuti peri-implantari nel lungo periodo" pic={one} />
                    </div>
                    <div className="col-span-3">
                        <ConnectionComponent text="Massimizza la stabilità meccanica" pic={two} />
                    </div>
                    <div className="col-span-2">
                        <ConnectionComponent text="Sigilla efficacemente contro le infiltrazioni batteriche" pic={three} />
                    </div>
                    <div className="col-span-2">
                        <ConnectionComponent text="Ottimizza la gestione dei tessuti molli con Platform Switching" pic={four} />
                    </div>
                </div>

            </div>

        </div>
    )
}