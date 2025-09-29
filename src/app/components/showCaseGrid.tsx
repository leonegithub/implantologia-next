import ShowCaseProduct from "@/app/components/showCaseProduct";
import { StaticImageData } from "next/image";
import Link from "next/link";

export type ShowCaseProps = {
    src: StaticImageData;
    alt: string;
    label: string;
};

type ShowCaseGridProps = {
    showCaseProducts: ShowCaseProps[];
    title?: string;
    link: string;
};

export default function ShowCaseGrid({ showCaseProducts, title, link }: ShowCaseGridProps) {
    return (
        <div className="mt-28">
            {title && (
                <h2 style={{lineHeight: "35px", minHeight: "150px"}} className="font-bold flex items-center text-3xl red">{title}</h2>
            )}

            <div className="grid text-center gap-10 grid-cols-2">
                {showCaseProducts.map((p, i) => (
                    <ShowCaseProduct key={i} {...p} />
                ))}
                <div className="bg-red underline flex aspect-square text-white items-center justify-center text-2xl font-bold">
                    <Link href={link} target="_self">Scopri di più</Link>
                </div>
            </div>
        </div>
    );
}