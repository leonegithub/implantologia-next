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
        <div className="md:grid gap-10 grid-cols-3 mt-10 w-full">
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </div>
    );
}
