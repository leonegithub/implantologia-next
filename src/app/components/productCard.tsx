import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = {
    src: StaticImageData;
    alt: string;
    href: string;
    label: string;
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
            <Link className="red text-2xl underline block mt-2" href={href}>
                {label}
            </Link>
        </div>
    );
}
