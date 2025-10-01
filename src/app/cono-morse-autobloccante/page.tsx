import TextBlock from "@/app/components/textBlock";
import Image from "next/image";
import prestazioni1 from '@/../public/prestazioni_1.png'
import prestazioni2 from '@/../public/prestazioni_2.png'
import prestazioni3 from '@/../public/prestazioni_3.png'
import prestazioni4 from '@/../public/prestazioni_4.png'
import prestazioni5 from '@/../public/prestazioni_5.png'


// app/cono-morse-autobloccante/page.tsx
import type { Metadata } from "next";

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




const prestazioni = [
    {
        title: "Approccio mininvasivo\ne preservazione dell’osso\ncrestale",
        text: "Grazie alla porzione coronale cilindrica, è\npossibile un approccio mininvasivo che favorisce\nil mantenimento dell’osso crestale.",
        img: prestazioni4,
    },
    {
        title: "Elevata stabilità primaria anche in\nosso di bassa qualità",
        text: "La geometria cilindro-conica favorisce la\ncompattazione dell’osso sotto preparato,\ngarantendo una buona stabilità primaria anche\nin condizioni ossee sfavorevoli.",
        img: prestazioni1,
    },
    {
        title: "Gestione ottimale di\npost-estrattivi e carico immediato",
        text: "La filettatura con passo fine e altezza crescente\ngenera un torque progressivo, facilitando la gestione\ndei casi post-estrattivi e del carico immediato.",
        img: prestazioni2,
    },
    {
        title: "Migliore osteointegrazione",
        text: "La superficie High Rutile Surface (HRS)\nmicrosabbiata crea un sottile strato di ossido\ndi titanio puro (TiO₂) con rugosità controllata,\nriducendo la tensione superficiale e favorendo\ni processi di osteointegrazione.",
        img: prestazioni5,
    },
    {
        title: "Soluzione ideale per spazi limitati\ne anatomie complesse",
        text: "L’apice sottile lo rende particolarmente indicato\nper creste e spazi interdentali ridotti, concavità\nvestibolari e radici convergenti.",
        img: prestazioni3,
    },
];

export default function ConoMorseAutobloccante() {
    return (
        <div className="container mx-auto px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
            <section className="autobloccante">
                <h2 className="red text-5xl"><span className="font-bold">Impianti XCN®</span>Tapered</h2>
                <div className="grid grid-cols-12">
                    <div className="col col-span-12 lg:col-span-7">
                    <h4 className="red text-3xl my-20">I due impianti della linea Tapered hanno in comune una serie
                        di caratteristiche <span className="font-bold">progettate per migliorarne le prestazioni cliniche </span>
                        nelle varie situazioni chirurgiche e protesiche.</h4>
                    </div>
                </div>
                <div className="grid gap-28  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    {prestazioni.map((p, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4">
                            <TextBlock title={p.title} text={p.text} />
                            <Image width={300} src={p.img} alt="small" className="mx-auto md:mx-0" />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}