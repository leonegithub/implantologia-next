import Image from "next/image";
import Kit from '@/../public/kit-con-scritte.png'
import Kit_mobile from '@/../public/kit-con-scritte_2.png'

// app/kit-chirurgico/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://implantologia.leone.it"),
  title: "Kit chirurgico Leone – Strumentario completo per sistema XCN®",
  description:
    "Kit chirurgico completo Leone 156-0066-04: strumentario autoclavabile in PPSU, stop di profondità, frese pilota e elicoidali. Progettato per il sistema implantare XCN®.",
  keywords: [
    "kit chirurgico Leone",
    "strumentario XCN",
    "strumenti implantologia",
    "kit chirurgico completo",
    "strumentario chirurgo dentale",
    "fresatura implantare",
    "stop profondità",
    "autoclavabile PPSU"
  ],
  applicationName: "Implantologia Leone",
  authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
  creator: "Leone",
  publisher: "Leone",
  category: "Salute",
  alternates: {
    canonical: "https://implantologia.leone.it/kit-chirurgico",
    languages: {
      "it-IT": "https://implantologia.leone.it/kit-chirurgico"
    }
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Implantologia Leone",
    url: "https://implantologia.leone.it/kit-chirurgico",
    title: "Kit chirurgico Leone – Strumentario completo per sistema XCN®",
    description:
      "Kit chirurgico completo per impianti XCN®: frese, stop di profondità, supporti silicone, strumentario autoclavabile in PPSU.",
    images: [
      {
        url: "/kit-chirurgico-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kit chirurgico Leone per sistema XCN"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kit chirurgico Leone – Strumentario completo per sistema XCN®",
    description:
      "Kit chirurgico completo per impianti XCN® con frese, stop di profondità e supporti colorati. Scopri lo strumentario Leone.",
    images: ["/kit-chirurgico-og.jpg"]
  }
};





export default function KitChirurgico() {
    return (
        <div className="container mx-auto px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
            <h2 className="red text-6xl mb-10"><span className="font-bold">Kit chirurgico </span><br/> per impianti XCN® Tapered</h2>
            <div className="grid grid-cols-12">
            <p className="col-span-12 md:col-span-6">
                Il kit chirurgico contiene tutti gli strumenti necessari per l’inserimento degli impianti <strong>XCN® Tapered</strong> raccolti
                in un kit di dimensioni ridottissime con un design semplice e intuitivo grazie alle linee serigrafate nel codice
                colore dell’impianto <span className="font-bold">Narrow 2.9 Tapered</span> e <span className="font-bold">3.8 Tapered</span>.
            </p>
            </div>
            <ul className="mt-10 list-inside list-disc">
                <li>fabbricato in materiale plastico PPSU</li>
                <li>completamente autoclavabile</li>
                <li>dimensioni ridottissime</li>
                <li>vassoio interno con strumenti</li>
                <li>misuratore di lunghezza frese DLC</li>
            </ul>
         


            <div className="kit-image my-5 w-full">
            {/* Desktop / Tablet */}
            <div className="hidden md:block">
                <Image src={Kit} alt="Kit chirurgico" />
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <Image src={Kit_mobile} alt="Kit chirurgico mobile" />
            </div>
            </div>


            <div>
                <div className="kit-inside mt-15">
                    <h2 style={{ fontWeight: 'bold', color: '#6b7c7d' }}>Contenuto del kit:</h2>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-1930-02
                            </a>{' '}
                            fresa a lancia
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-2216-52
                            </a>{' '}
                            fresa pilota corta
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-2816-53
                            </a>{' '}
                            fresa elicoidale corta Ø 2,8 mm
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-3216-55
                            </a>{' '}
                            fresa di forma corta Ø 3,2 mm per impianti 3.8 Tapered
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-3516-55
                            </a>{' '}
                            fresa di forma corta Ø 3,5 mm per osso denso per impianti 3.8 Tapered
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1033-00
                            </a>{' '}
                            driver High Torque per connessione 2.2
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1041-00
                            </a>{' '}
                            driver High Torque per connessione 3.0
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1002-01
                            </a>{' '}
                            raccordo per manipolo
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1019-00
                            </a>{' '}
                            prolunga per frese
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1002-00
                            </a>{' '}
                            prolunga per strumenti
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1001-01
                            </a>{' '}
                            avvitatore manuale chirurgico
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1003-00
                            </a>{' '}
                            strumento per tappi di chiusura
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1006-00
                            </a>{' '}
                            estrattore a testa esagonale
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1014-00
                            </a>{' '}
                            cricchetto
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}