import Image from "next/image";
import small from "@/../public/small.png";
import homeTwentyNine from "@/../public/homepage-2.9.png";
import homeThirtyEight from "@/../public/homepage-3.8.png";
import Kit from "@/../public/kit-chirurgico.png";
import prestazioni1 from '@/../public/prestazioni_1.png'
import prestazioni2 from '@/../public/prestazioni_2.png'
import prestazioni3 from '@/../public/prestazioni_3.png'
import vantaggi1 from '@/../public/vantaggi_1.png'
import vantaggi2 from '@/../public/vantaggi_2.png'
import vantaggi3 from '@/../public/vantaggi_3.png'
import bandiera from '@/../public/Bandiera.png'
import caso1 from '@/../public/Caso_1-Ricci.png'
import caso2 from '@/../public/Caso_2-Azzola.png'
import caso3 from '@/../public/Caso_3-Belcastro.png'
import caso4 from '@/../public/Caso_4-Guerra.png'
import exaConnect from '@/../public/exa-connect.png'
import fissaRimovibile from '@/../public/fissa-rimovibile.png'
import ponte from '@/../public/ponte.png'
import protesiAttacchi from '@/../public/protesi-attacchi.png'
import protesiCementata from '@/../public/protesi-cementata.png'
import ProductGrid, { Product } from "@/app/components/productGrid";
import ShowCaseGrid, {ShowCaseProps} from "@/app/components/showCaseGrid";
import workflowOne from '@/../public/workflow1.png'
import workflowTwo from '@/../public/workflow2.png'
import workflowThree from '@/../public/workflow3.png'
import workflowFour from '@/../public/workflow4.png'
import workflowFive from '@/../public/workflow5.png'
import workflowSix from '@/../public/workflow6.png'
import respoTitle from '@/../public/Small-but-strong.png'

// app/page.tsx (estratto)
import type { Metadata } from "next";
import CasoClinico from "@/app/components/casoClinico";
import ContactForm from "@/app/components/contactForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://implantologia.leone.it"),
  title: {
    default: "Impianti XCN® Tapered Series – Resistenza e Affidabilità | Leone",
    template: "%s | Implantologia Leone"
  },
  description:
    "Il sistema implantare XCN® Tapered Series di Leone ridefinisce gli standard di resistenza e affidabilità grazie alla connessione cono Morse autobloccante. Soluzioni per spazi limitati, stabilità primaria elevata e workflow protesici digitali.",
  keywords: [
    "implantologia",
    "impianti dentali",
    "XCN",
    "Tapered",
    "cono Morse",
    "stabilità primaria",
    "protesi avvitata",
    "protesi cementata",
    "MUA",
    "ExaConnect",
    "workflow digitale CAD-CAM",
    "Leone"
  ],
  applicationName: "Implantologia Leone",
  authors: [{ name: "Leone", url: "https://implantologia.leone.it" }],
  creator: "Leone",
  publisher: "Leone",
  category: "Salute",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1
  },
  alternates: {
    canonical: "https://implantologia.leone.it",
    languages: {
      "it-IT": "https://implantologia.leone.it"
    }
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Implantologia Leone",
    url: "https://implantologia.leone.it",
    title: "Impianti XCN® Tapered Series – Resistenza e Affidabilità",
    description:
      "Connessione cono Morse autobloccante, elevata stabilità primaria e massima versatilità protesica. Scopri Narrow 2.9 e 3.8, kit chirurgici e casi clinici.",
    images: [
      {
        url: "/og-home.jpg", // 👈 basta il path pubblico
        width: 1200,
        height: 630,
        alt: "Impianti XCN® Tapered Series – Leone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Impianti XCN® Tapered Series – Resistenza e Affidabilità | Leone",
    description:
      "Connessione cono Morse autobloccante, stabilità primaria elevata e flussi CAD-CAM: scopri la gamma XCN®.",
    images: ["/og-home.jpg"] // 👈 anche qui solo path
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};


export default function Home() {
    const images = [caso1, caso2, caso3, caso4];
    const products: Product[] = [
        {
            src: homeTwentyNine,
            alt: "XCN Narrow 2.9",
            href: "/narrow-2_9-tapered",
            label: (
                <>
                    <span className="font-bold">XCN® Narrow 2.9</span> Tapered
                </>
            ),
        },
        {
            src: homeThirtyEight,
            alt: "XCN 3.8",
            href: "/narrow-3_8-tapered",
            label: (
                <>
                    <span className="font-bold">XCN® 3.8</span> Tapered
                </>
            ),
        },
        {
            src: Kit,
            alt: "Kit chirurgico",
            href: "/kit-chirurgico",
            label: "Kit chirurgico",
        },
    ];

    const showcaseOne: ShowCaseProps[] = [
        {
            src: vantaggi1,
            alt: vantaggi1.toString(),
            label: "Massimizza la stabilità meccanica"
        },
        {
            src: vantaggi2,
            alt: vantaggi2.toString(),
            label: "Sigilla efficacemente contro le infiltrazioni\n" +
                "batteriche"
        },
        {
            src: vantaggi3,
            alt: vantaggi3.toString(),
            label: "Ottimizza la gestione dei tessuti molli con Platform Switching"
        }
    ]

    const showcaseTwo: ShowCaseProps[] = [
        {
            src: prestazioni1,
            alt: prestazioni1.toString(),
            label: "Elevata stabilità primaria anche in\n" +
                "osso di bassa qualità"
        },
        {
            src: prestazioni2,
            alt: prestazioni2.toString(),
            label: "Gestione ottimale di\n" +
                "post-estrattivi e carico immediato"
        },
        {
            src: prestazioni3,
            alt: prestazioni3.toString(),
            label: "Soluzione ideale per spazi limitati\n" +
                "e anatomie complesse"
        },
    ]

    return (
        <div className="container mx-auto px-10 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">

            <div className="main-text">
                <div className="grid grid-cols-6 mb-20 items-center">
                    <h3 className="col-span-5 red sm:text-2xl xl:text-3xl">
                        <span className="font-bold">Impianti XCN®</span> Tapered Series <br/>
                    </h3>
                    <Image
                        className="col-span-1 justify-self-end"
                        src={bandiera}
                        alt={bandiera.toString()}
                        width={150}
                        height={100}
                    />
                </div>

                <Image className="block md:hidden" src={respoTitle} alt={"small"} />

                <h1 className="hidden md:block mb-20 red text-9xl font-semibold red">
                    <div className="flex mb-8 items-center">
                        sma
                        <Image
                            className="ms-3 pb-5"
                            width={70}
                            height={70}
                            src={small}
                            alt="small"
                        />
                    </div>
                    but strong
                </h1>

<div className="grid grid-cols-12">
<h2 className="col-span-12 lg:col-span-7 red text-2xl sm:text-2xl xl:text-3xl !leading-[32px] sm:!leading-[32px]">
  Il sistema implantare che ridefinisce gli standard di resistenza e affidabilità grazie alla connessione cono Morse autobloccante
</h2>

</div>

            </div>



            <div className="pt-10">
                <ProductGrid products={products} />
            </div>

            <div className=" grid-cols-2 gap-[250px] mt-10">
                <ShowCaseGrid link={"/soluzioni-cliniche"} title="I vantaggi della connessione cono Morse autobloccante" showCaseProducts={showcaseOne} />
                <ShowCaseGrid link={"/cono-morse-autobloccante"} title="Progettato per ottime soluzioni cliniche" showCaseProducts={showcaseTwo} />
            </div>





<div className="carosello w-full lg:w-1/2">
<h3 className="font-bold red text-4xl my-5 pt-24">Casi clinici</h3>


  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

      <CasoClinico
          title={"Ripristino immediato di creste interforaminali atrofiche con impianti XCN® Narrow 2.9 Tapered"}
          subtitle={"Dott. Andrea Ricci"}
          text={"Posizionamento di tre impianti Narrow 2.9 Tapered con chirurgia guidata flapless e carico immediato con protesi provvisoria in PMMA avvitata. Successiva impronta ottica sui MUA per progettazione CAD-CAM della protesi definitiva avvitata in zirconia."}
          link={"https://leone.it/servizi/download/XCNNews-39-Ricci-Pisa.pdf"}
      />

      <CasoClinico
          title={"Riabilitazione di mascellare atrofico con impianti XCN® Narrow 2.9 Tapered"}
          subtitle={"Dott. Francesco Azzola, Dott. Bruno Francesco Barbaro, Prof. Stefano Corbella"}
          text={"Posizionamento di quattro impianti Narrow 2.9 Tapered e contestuale rigenerazione ossea guidata. Dopo la guarigione sommersa, protesizzazione con protesi rimovibile ritenuta da una barra avvitata ai monconi MUA."}
          link={"https://leone.it/servizi/download/XCNNews-35-Azzola.pdf"}
      />

      <CasoClinico
          title={"Sostituzione immediata di un incisivo centrale superiore con impianto XCN® 3.8 Tapered"}
          subtitle={"Dott. Salvatore Belcastro, Dott. Alessio Natali"}
          text={"Posizionamento post-estrattivo immediato con approccio flapless di un impianto 3.8 Tapered e contestuale rigenerazione ossea guidata. Successiva procedura protesica full digital con moncone Ti-Base customizzato e corona in zirconia."}
          link={"https://leone.it/servizi/download/XCNNews-40-Belcastro-Natali.pdf"}
      />

      <CasoClinico
          title={"Sostituzione immediata di due incisivi laterali superiori decidui con impianti XCN® 3.8 Tapered"}
          subtitle={"Dott. Domenico Guerra, Dott. Giovanni Guerra"}
          text={"Posizionamento post-estrattivo immediato di due impianti 3.8 Tapered e provvisori immediati con monconi temporanei. Dopo trattamento ortodontico, protesizzazione definitiva con corone in zirconia cementate extraoralmente."}
          link={"https://leone.it/servizi/download/XCNNews-40-Guerra-Guerra.pdf"}
      />
    
    </div>
</div>



<div className="carosello w-full lg:w-1/2">
  <h3 className="font-bold red text-4xl my-5 pt-24">Massima Versatilità Protesica</h3>

  {/* Contenitori: 1 col su mobile, 2 col da sm in su — allineati in alto */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start content-start">
    
    {/* CARD */}
    <div className="rounded-lg pt-4">
      <div className="w-full font-semibold text-2xl red">Protesi cementata</div>

      {/* Interno: 1 col su mobile+tablet, 2 col da lg — allineati in alto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start content-start">
        <div className="rounded pt-3 min-h-[80px]">
        I monconi XCN® per protesi cementata, privi di canale vite, sono completamente personalizzabili, facili da preparare, più estetici e resistenti. La gamma include soluzioni compatibili con flussi analogici e digitali.</div>
        <div className="rounded pt-3 min-h-[80px]">
        
                <Image
                            width={300}
                            src={protesiCementata}
                            alt="protesi cementata"
                        />

        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="rounded-lg pt-4 pb-4">
      <div className="w-full font-semibold text-2xl red">Protesi avvitata per elementi singoli con ExaConnect®</div>

      {/* Interno: 1 col su mobile+tablet, 2 col da lg — allineati in alto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start content-start">
        <div className="rounded pt-3 min-h-[80px]">
        Grazie alla possibilità di gestire angolazioni fino a 25° e altezze transmucose fino a 5 mm,  il connettore ExaConnect® consente un flusso di lavoro semplificato, portando la connessione protesica a livello dei tessuti gengivali. In abbinamento al Ti-Base dedicato, è possibile ottenere una gamma di monconi con angolazioni e altezze transmucose variabili, ideali per approcci One Abutment–One Time.</div>
        <div className="rounded pt-3 min-h-[80px]">
        
                <Image
                            width={300}
                            src={exaConnect}
                            alt="protesi cementata"
                        />

        </div>
      </div>
    </div>    {/* CARD */}
    <div className="rounded-lg pt-4 pb-4">
      <div className="w-full font-semibold text-2xl red">Protesi avvitata per ponti e arcate complete</div>

      {/* Interno: 1 col su mobile+tablet, 2 col da lg — allineati in alto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start content-start">
        <div className="rounded pt-3 min-h-[80px]">
   L&#39;assenza di una vite di connessione tra fixture e moncone rende i MUA Leone estremamente efficienti, poiché richiedono la gestione di una sola vite, quella protesica. Questo semplifica notevolmente le fasi cliniche. I monconi MUA Leone offrono la gamma più ampia sul mercato, con angolazioni fino a 35° e altezze transmucose fino a 7 mm. Sono inoltre disponibili accessori dedicati alle diverse tecniche di ancoraggio protesico, come interfacce CAD-CAM e cilindri da incollaggio.</div>
        <div className="rounded pt-3 min-h-[80px]">
        
                <Image
                            width={300}
                            src={ponte}
                            alt="protesi cementata"
                        />

        </div>
      </div>
    </div>    {/* CARD */}
    <div className="rounded-lg pt-4 pb-4">
      <div className="w-full font-semibold text-2xl red">Protesi conometrica fissa e rimovibile</div>

      {/* Interno: 1 col su mobile+tablet, 2 col da lg — allineati in alto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start content-start">
        <div className="rounded pt-3 min-h-[80px]">
        Con un semi-angolo di 5°, i monconi conometrici assicurano il fissaggio della struttura protesica mediante cappette preformate in PEEK, sfruttando la frizione conometrica. Questa soluzione, priva di viti e cementi, garantisce elevata stabilità e un sigillo protesico efficace, pur consentendo una facile rimozione per controlli e igiene orale. Sono disponibili quattro tipologie di cappette con diverse forze di ritenzione, adatte a tutte le configurazioni protesiche.</div>
        <div className="rounded pt-3 min-h-[80px]">
        
                <Image
                            width={300}
                            src={fissaRimovibile}
                            alt="protesi cementata"
                        />

        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="rounded-lg pt-4 pb-4">
      <div className="w-full font-semibold text-2xl red">Protesi su attacchi</div>

      {/* Interno: 1 col su mobile+tablet, 2 col da lg — allineati in alto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start content-start">
        <div className="rounded pt-3 min-h-[80px]">
        Grazie alla connessione cono Morse, i monconi testa sferica Leone risultano privi di fori e incavi, facilitando la gestione quotidiana dell&#39;igiene orale.
        Disponibili sia in versione dritta che angolata a 15°, con tre diverse altezze transmucose, offrono la possibilità di scelta tra varie tipologie di cuffie in base alle esigenze cliniche.</div>
        <div className="rounded pt-3 min-h-[80px]">

            <Image
                width={300}
                src={protesiAttacchi}
                alt="protesi cementata"
            />

        </div>
      </div>
    </div>

  </div>
</div>

            <section className="workflow-protesico-digitale w-full">
                  <h3 className="font-bold red text-4xl my-5 pt-24">Workflow protesico digitale</h3>
                <div className="grid grid-cols-1">
                    <p className="mb-10">Il sistema implantare Leone si integra perfettamente nei workflow digitali, offrendo una gestione protesica
                        fluida e completa, dalla corona singola fino alle riabilitazioni su arcata completa. Grazie a componenti dedicati
                        e alla piena compatibilità con i flussi CAD-CAM, è possibile garantire precisione, rapidità e personalizzazione
                        in ogni fase del trattamento, ottimizzando tempi clinici e risultati estetico-funzionali.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
                    {[workflowTwo, workflowOne, workflowFour, workflowThree, workflowSix, workflowFive].map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`workflow ${i+1}`}
                            className="w-full h-auto block"
                        />
                    ))}
                </div>

                <p className="!text-sm leading-tight mt-8">Per gentile concessione Dr. Andrea Ricci e Odt. Massimiliano Pisa</p>             
            </section>

            <div id="contact-form"></div>
            <ContactForm />
        </div>
    );
}
