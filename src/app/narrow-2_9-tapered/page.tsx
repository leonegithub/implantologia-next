import MinMax from "@/app/components/minMax";
import ProtocolloSemplificato from "@/app/components/protocolloSemplificato";
import Tabella29 from '@/../public/2.9mm-table.png'
import Image from "next/image";

export default function TwoNine() {
    return (
        <>
        <div className="px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">
                <MinMax />
            </div>
            <div className="container margin mx-auto px-4 ">
                <Image className="lg:w-1/2 mt-20" src={Tabella29} alt={"tabella-29"} />
            </div>
        <div className="margin">
            <ProtocolloSemplificato />
        </div>
        </>
    )
}