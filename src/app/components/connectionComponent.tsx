import Image, { StaticImageData } from "next/image";

interface ConnectionComponentProps {
    text: string;
    pic: StaticImageData;
}

export default function ConnectionComponent({ text, pic }: ConnectionComponentProps) {
    return (
        <div className="my-10">
            <Image
                src={pic}
                alt="picture"
                width={400}
                className="block"
            />
            <p className="mt-5 text-xl font-bold">{text}</p>
        </div>
    );
}
