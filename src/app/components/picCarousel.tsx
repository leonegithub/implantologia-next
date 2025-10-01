"use client"

import Image, { StaticImageData } from "next/image";
import { Carousel } from 'flowbite-react';
import { useState} from "react";
import Link from "next/link";

const clinicalCases = [
    {
        title: "Ripristino immediato di creste interforaminali atrofiche con\nimpianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Andrea Ricci",
        text: "Posizionamento di tre impianti Narrow 2.9 Tapered con chirurgia guidata flapless e carico immediato con protesi provvisoria in\nPMMA avvitata. Successiva impronta ottica sui MUA per progettazione CAD-CAM della protesi definitiva avvitata in zirconia.",
        link: "https://leone.it/servizi/download/XCNNews-39-Ricci-Pisa.pdf"
    },
    {
        title: "Riabilitazione di mascellare atrofico con impianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Francesco Azzola, Dott. Bruno Francesco Barbaro, Prof. Stefano Corbella",
        text: "Posizionamento di quattro impianti Narrow 2.9 Tapered e contestuale rigenerazione ossea guidata.\nDopo la guarigione sommersa, protesizzazione con protesi rimovibile ritenuta da una barra avvitata ai monconi MUA.",
        link: "https://leone.it/servizi/download/XCNNews-35-Azzola.pdf"
    },
    {
        title: "Sostituzione immediata di un incisivo centrale superiore con impianto XCN® 3.8 Tapered",
        doctor: "Dott. Salvatore Belcastro, Dott. Alessio Natali",
        text: "Posizionamento post-estrattivo immediato con approccio flapless di un impianto 3.8 Tapered e contestuale rigenerazione\nossea guidata. Successiva procedura protesica full digital con moncone Ti-Base customizzato e corona in zirconia.",
        link: "https://leone.it/servizi/download/XCNNews-40-Belcastro-Natali.pdf"
    },
    {
        title: "Sostituzione immediata di due incisivi laterali superiori decidui con impianti XCN® 3.8 Tapered",
        doctor: "Dott. Domenico Guerra, Dott. Giovanni Guerra",
        text: "Posizionamento post-estrattivo immediato di due impianti 3.8 Tapered e provvisori immediati con monconi temporanei.\nDopo trattamento ortodontico, protesizzazione definitiva con corone in zirconia cementate extraoralmente.",
        link: "https://leone.it/servizi/download/XCNNews-40-Guerra-Guerra.pdf"
    }
];



export default function PicCarousel({ images }: { images: StaticImageData[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
<div className="relative w-full h-40 md:h-96 max-w-3xl">
                <Carousel
                    leftControl={
                        <svg className="w-6 h-6 bg-red-500 text-white rounded" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    }
                    rightControl={
                        <svg className="w-6 h-6 bg-red-500 text-white rounded" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    }
                    onSlideChange={setActiveIndex}>
                    {images.map((image, idx) => (
                        <div key={idx} className="grid place-items-center h-96 overflow-hidden rounded-lg">
                            <Image
                                src={image}
                                alt={image.toString()}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <h3 className="red text-3xl mt-5">{clinicalCases[activeIndex].title}</h3>
            <p className="mt-4 text-3xl font-bold text-gray-500">
                {clinicalCases[activeIndex].doctor}
            </p>
            <p>{clinicalCases[activeIndex].text}</p>

            <Link
                href={clinicalCases[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
                Vai all&#39;articolo
            </Link>
        </>
    );
}
