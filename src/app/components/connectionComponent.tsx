import Image, {StaticImageData} from "next/image";

interface ConnectionComponentProps {
    text: string;
    pic: StaticImageData;
}

export default function ConnectionComponent({ text, pic }: ConnectionComponentProps) {
    return (
        <div className="container my-10">

                <Image
                    src={pic}
                    alt={"picture"}
                    width={500}
                />

            <div className="col mt-5 text-2xl font-bold items-center col-span-4">
                <div className="grid grid-cols-6">
                    <div className="col col-span-4">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}