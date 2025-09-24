"use client"

import Image, { StaticImageData } from "next/image";
import { Carousel } from 'flowbite-react';
import { useState} from "react";

const clinicalCases = [
    {
        title: "Ripristino immediato di creste interforaminali atrofiche con\n" +
            "impianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Andrea Ricci"
    },
    {
        title: "Riabilitazione di mascellare atrofico\n" +
            "con impianti XCN® Narrow 2.9 Tapered",
        doctor: "Dott. Francesco Azzola"
    },
    {
        title: "Sostituzione immediata di un incisivo centrale superiore\n" +
            "con impianto XCN® 3.8 Tapered",
        doctor: "Dott. Salvatore Belcastro, Dott. Alessio Natali"
    },
    {
        title: "Sostituzione immediata di due incisivi laterali superiori decidui con\n" +
            "impianti XCN® 3.8 Tapered",
        doctor: "Dott. Domenico Guerra, Dott. Giovanni Guerra"
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
        </div>
    );
}
