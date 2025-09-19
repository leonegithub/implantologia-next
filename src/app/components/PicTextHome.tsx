import Image, {StaticImageData} from "next/image";

type PicTextHomeProps = {
    text: string;
    picture: string | StaticImageData;
}

export default function PicTextHome({ text, picture }: PicTextHomeProps) {
    return (
        <div>
            <Image src={picture} alt={text} />
            <p className="font-bold py-4">{text}</p>
        </div>
    );
}
