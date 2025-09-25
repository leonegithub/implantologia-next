"use client"

import Image, { StaticImageData } from "next/image";
import { Carousel } from 'flowbite-react';
import { useState} from "react";

const clinicalCases = [
    {
        title: "Ripristino immediato di creste interforaminali atrofiche con\n" +
            "impianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Andrea Ricci",
        text: "Posizionamento di tre impianti Narrow 2.9 Tapered con chirurgia guidata flapless e carico immediato con protesi provvisoria in\n" +
            "PMMA avvitata. Successiva impronta ottica sui MUA per progettazione CAD-CAM della protesi definitiva avvitata in zirconia."
    },
    {
        title: "Riabilitazione di mascellare atrofico\n" +
            "con impianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Francesco Azzola",
        text: "Posizionamento di quattro impianti Narrow 2.9 Tapered e contestuale rigenerazione ossea guidata.\n"+
            "Dopo la guarigione sommersa, protesizzazione con protesi rimovibile ritenuta da una barra avvitata ai monconi MUA."
    },
    {
        title: "Sostituzione immediata di un incisivo centrale superiore\n" +
            "con impianto XCN® 3.8 Tapered",
        doctor: "Dott. Salvatore Belcastro, Dott. Alessio Natali",
        text: "Posizionamento post-estrattivo immediato con approccio flapless di un impianto 3.8 Tapered e contestuale rigenerazione\n" +
            "ossea guidata. Successiva procedura protesica full digital con moncone Ti-Base customizzato e corona in zirconia."
    },
    {
        title: "Sostituzione immediata di due incisivi laterali superiori decidui con\n" +
            "impianti XCN® 3.8 Tapered",
        doctor: "Dott. Domenico Guerra, Dott. Giovanni Guerra",
        text: "Posizionamento post-estrattivo immediato di due impianti 3.8 Tapered e provvisori immediati con monconi temporanei.\n" +
            "Dopo trattamento ortodontico, protesizzazione definitiva‚ con corone in zirconia cementate extraoralmente."
    }
    ]

export default function PicCarousel({ images }: { images: StaticImageData[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ height: "600px", width: "1000px" }} className="h-96 sm:h-96 xl:h-80 2xl:h-96 flex flex-col">
            <Carousel onSlideChange={setActiveIndex}>
                {images.map((image, idx) => (
                    <div key={idx} className="flex h-full dark:text-whitel">
                        <Image src={image} alt={image.toString()} />
                    </div>
                ))}
            </Carousel>
            <h3 className="red text-3xl mt-5">{clinicalCases[activeIndex].title}</h3>
            <p className="mt-4 text-xl font-bold text-gray-500">
                {clinicalCases[activeIndex].doctor}
            </p>
            <p className="mt-2">{clinicalCases[activeIndex].text}</p>
        </div>
    );
}
