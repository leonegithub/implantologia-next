import Image, { StaticImageData } from "next/image";

type ShowCaseProps = {
    src: StaticImageData;
    alt: string;
    label: string;
};

export default function ShowCaseProduct({ src, alt, label }: ShowCaseProps) {
    return (
            <div>
                <div className="relative w-full aspect-square">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-gray-600 pt-4 text-xl block mt-2">
                    {label}
                </div>
            </div>
    );
}
