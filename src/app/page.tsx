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
import ProductGrid, { Product } from "@/app/components/productGrid";
import ShowCaseGrid, {ShowCaseProps} from "@/app/components/showCaseGrid";
import PicCarousel from "@/app/components/picCarousel";

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
        <div className="container mx-auto px-4">
            <div className="main-text">
                <div className="grid grid-cols-6 mb-20 items-center">
                    <h3 className="col-span-5 red text-3xl">
                        <span className="font-bold">Impianti Connessione Cono Morse</span> Tapered Series <br/>
                        <span className="font-bold">XCN® 3.8</span> e <span className="font-bold">XCN® Narrow 2.9</span>
                    </h3>
                    <Image
                        className="col-span-1 justify-self-end"
                        src={bandiera}
                        alt={bandiera.toString()}
                        width={200}
                    />
                </div>

                <h1 className="mb-20 text-9xl font-semibold red">
                    <div className="flex mb-8 items-center">
                        sma
                        <Image
                            className="me-5 pb-5"
                            width={70}
                            src={small}
                            alt="small"
                        />
                    </div>
                    but strong
                </h1>
            </div>

            <div className="flex">
            <ProductGrid products={products} />
            </div>

                <div style={{gap: "250px"}} className="grid md:grid-cols-2">
                <ShowCaseGrid title="Progettato per ottime soluzioni cliniche" showCaseProducts={showcaseOne} />
                    <ShowCaseGrid title="I vantaggi della connessione cono-morse autobloccante " showCaseProducts={showcaseTwo} />
                </div>
            <div className="carosello pt-20 mt-10">
                <h3 className="font-bold red text-4xl my-5">Casi clinici</h3>
                <PicCarousel images={images} />
            </div>
            </div>
    );
}
