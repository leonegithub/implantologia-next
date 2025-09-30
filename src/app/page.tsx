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
import PicCarousel from "@/app/components/picCarousel";
import TextBlock from "@/app/components/textBlock";
import workflowOne from '@/../public/workflow1.png'
import workflowTwo from '@/../public/workflow2.png'
import workflowThree from '@/../public/workflow3.png'
import workflowFour from '@/../public/workflow4.png'
import workflowFive from '@/../public/workflow5.png'
import workflowSix from '@/../public/workflow6.png'
import respoTitle from '@/../public/Small-but-strong.png'

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
        <div className="container mx-auto px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
    

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
<h2 className="col-span-12 lg:col-span-7 red sm:text-3xl xl:text-3xl !leading-[35px]">
  Il sistema implantare che ridefinisce gli standard di resistenza e affidabilità grazie alla connessione cono Morse autobloccante
</h2>

</div>

            </div>



            <div className="pt-10">
                <ProductGrid products={products} />
            </div>

            <div className="md:block lg:grid grid-cols-2 gap-[250px] mt-10">
                <ShowCaseGrid link={"/soluzioni-cliniche"} title="Progettato per ottime soluzioni cliniche" showCaseProducts={showcaseOne} />
                <ShowCaseGrid link={"/cono-morse-autobloccante"} title="I vantaggi della connessione cono-morse autobloccante " showCaseProducts={showcaseTwo} />
            </div>

            <div className="carosello pt-20 mt-10">
                <h3 className="font-bold red text-4xl my-5">Casi clinici</h3>
                <PicCarousel images={images} />
            </div>

            <section className="versatilita-protesica mt-20">

                <h3 className="red font-bold py-4 mt-4 text-4xl">Massima Versatilità Protesica</h3>

                <div className="md:grid grid-cols-12 gap-20">


                <div className="md:flex col-span-6 items-start gap-6">
                        <TextBlock title={"Protesi cementata"} text={"I monconi XCN® per protesi cementata, privi di\n" +
                        "canale vite, sono completamente personalizzabili,\n" +
                        "facili da preparare, più estetici e resistenti.\n" +
                        "La gamma include soluzioni compatibili con flussi\n" +
                        "analogici e digitali."} />

                            <Image
                            className="py-15"
                            width={300}
                            src={protesiCementata}
                            alt="protesi cementata"
                        />
                    </div>




                    <div className="md:flex col-span-6 items-start gap-6">
                        <TextBlock title={"Protesi avvitata per elementi\n" +
                            "singoli con ExaConnect®"} text={"Grazie alla possibilità di gestire angolazioni fino a\n" +
                            "25° e altezze transmucose fino a 6 mm,  il connettore\n" +
                            "ExaConnect® consente un flusso di lavoro\n" +
                            "semplificato, portando la connessione protesica\n" +
                            "a livello dei tessuti gengivali. In abbinamento al\n" +
                            "Ti-Base dedicato, è possibile ottenere una gamma\n" +
                            "di monconi con angolazioni e altezze transmucose\n" +
                            "variabili, ideali per approcci One Abutment–One\n" +
                            "Time."} />
                        <Image
                            className="py-15"
                            width={300}
                            src={exaConnect}
                            alt="exa connect"
                        />
                    </div>

                <div className="md:flex col-span-6 items-start gap-6">
                        <TextBlock title={"Protesi avvitata per ponti\n" +
                            "e arcate complete"} text={"L'assenza di una vite di connessione tra fixture e moncone rende i MUA Leone estremamente efficienti, poiché richiedono la gestione di una sola vite, quella protesica. Questo semplifica notevolmente le fasi cliniche. I monconi MUA Leone offrono la gamma più ampia sul mercato, con angolazioni fino a 35° e altezze transmucose fino a 7 mm. Sono inoltre disponibili accessori dedicati alle diverse tecniche di ancoraggio protesico, come interfacce CAD-CAM e cilindri da incollaggio.\n"} />
                        <Image
                            className="py-15"
                            width={300}
                            src={ponte}
                            alt="ponte"
                        />
                    </div>

<div className="md:flex col-span-6 items-start gap-6">
                        <TextBlock title={"Protesi conometrica fissa\n" +
                            "e rimovibile"} text={"Con un semi-angolo di 5°, i monconi conometrici\n" +
                            "assicurano il fissaggio della struttura protesica\n" +
                            "mediante cappette preformate in PEEK, sfruttando\n" +
                            "la frizione conometrica. Questa soluzione, priva\n" +
                            "di viti e cementi, garantisce elevata stabilità e un\n" +
                            "sigillo protesico efficace, pur consentendo una\n" +
                            "facile rimozione per controlli e igiene orale. Sono\n" +
                            "disponibili quattro tipologie di cappette con diverse\n" +
                            "forze di ritenzione, adatte a tutte le configurazioni\n" +
                            "protesiche."} />
                        <Image
                            className="py-15"
                            width={300}
                            src={fissaRimovibile}
                            alt="fissa rimovibile"
                        />
                    </div>

                    <div className="md:flex col-span-6 justify-center">
                        <TextBlock title={"Protesi su attacchi"} text={
                            "Grazie alla connessione cono Morse, i monconi a\n" +
                            "testa sferica Leone risultano privi di fori e incavi,\n" +
                            "facilitando la gestione quotidiana dell'igiene orale.\n" +
                            "Disponibili sia in versione dritta che angolata a 15°,\n" +
                            "con tre diverse altezze transmucose, offrono la\n" +
                            "possibilità di scelta tra varie tipologie di cuffie in base\n" +
                            "alle esigenze cliniche."
                        } />
                        <Image
                            className="py-15"
                            width={300}
                            src={protesiAttacchi}
                            alt="protesi attacchi"
                        />
                    </div>

                </div>
            </section>

            <section className="workflow-protesico-digitale mt-15">
                <h3 className="red font-bold py-4 mt-4 text-3xl">Workflow protesico digitale</h3>
                <div className="grid grid-cols-1">
                    <p className="mb-10">Il sistema implantare Leone si integra perfettamente nei workflow digitali, offrendo una gestione protesica
                        fluida e completa, dalla corona singola fino alle riabilitazioni su arcata completa. Grazie a componenti dedicati
                        e alla piena compatibilità con i flussi CAD-CAM, è possibile garantire precisione, rapidità e personalizzazione
                        in ogni fase del trattamento, ottimizzando tempi clinici e risultati estetico-funzionali.</p>
                </div>
                <div className="grid md:w-1/2 grid-cols-6 gap-2">
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowOne} alt={workflowOne.toString()} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowTwo} alt={workflowTwo.toString()} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowThree} alt={workflowThree.toString()} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowFour} alt={workflowFour.toString()} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowFive} alt={workflowFive.toString()} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full h-auto" src={workflowSix} alt={workflowSix.toString()} />
                    </div>
                </div>
                <p className="text-xs leading-tight">Per gentile concessione Dr. Andrea Ricci e Odt. Massimiliano Pisa</p>             
            </section>
        </div>
    );
}
