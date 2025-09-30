import OneForAll from "@/app/components/oneForAll";
import ProtocolloSemplificatoDue from "@/app/components/protocolloSemplificatoDue";
import Tabella38 from '@/../public/3.8mm-table.png'
import Image from "next/image";

export default function ThreeEight() {
    return (
        <>
            <div className="mb-10 px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
                <OneForAll />
            </div>
            <div className="container margin mx-auto px-4">
                <Image className="lg:w-1/2" src={Tabella38} alt={"tabella-29"} />
            </div>
            <div className="margin">
                <ProtocolloSemplificatoDue />
            </div>
        </>
    )
}