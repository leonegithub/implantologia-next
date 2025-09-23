import ProductCard from "@/app/components/productCard";
import { StaticImageData } from "next/image";
import React from "react";

export type Product = {
    src: StaticImageData;
    alt: string;
    href: string;
    label: React.ReactNode;
};

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        /*<div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20">
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </div>*/
        <div className="grid w-full gap-10 grid-cols-3 mt-10">
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </div>
    );
}
