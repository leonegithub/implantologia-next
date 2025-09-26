import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
    src: StaticImageData;
    alt: string;
    href: string;
    label: React.ReactNode;
};

export default function ProductCard({ src, alt, href, label }: ProductCardProps) {
    return (
        <div>
            <div className="relative w-full aspect-video">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover border border-red-600"
                />
            </div>
            <Link className="red py-10 md:py-5 sm:text-center md:text-start text-2xl underline block mt-2" href={href}>
                {label}
            </Link>
        </div>
    );
}
