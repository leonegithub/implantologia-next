import TextBlock from "@/app/components/textBlock";
import Image from "next/image";
import Connessione29 from '../../public/sequenza-29_2.png'

export default function Home() {
    return (
        <div className="general">
            <div className="container mx-auto px-4">
                <div className="first-page-title">
                    <h1 className="text-6xl mb-4 red font-bold">
                        <div>Minima invasività, </div>
                        <div>massima affidabilità</div>
                    </h1>
                </div>
                <div className="text-container flex flex-col md:flex-row">
                    <div className="left w-full md:w-1/2">
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12">
                                <TextBlock title={"Small, but strong"} text={"Con un <strong>diametro massimo</strong> di soli 2,9 mm,\n" +
                                    "questo impianto rappresenta la soluzione clinica\n" +
                                    "semplice, sicura ed efficace per <strong>spazi interdentali</strong>\n" +
                                    "<strong>estremamente ridotti</strong> o <strong>creste ossee fortemente</strong>\n" +
                                    "<strong>atrofiche</strong>. Permette di evitare interventi di chirurgia\n" +
                                    "avanzata, <strong>riducendo complicanze, tempi e costi</strong>."} />
                            </div>
                        </div>
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12">
                                <TextBlock title={"Oltre i limiti anatomici,\n" +
                                    "senza compromessi"} text={"Utilizzato con successo dal 2017 da migliaia di" +
                                    "professionisti, questo impianto si è dimostrato" +
                                    "<strong>affidabile</strong> non solo per <strong>edentulie singole</strong> in zona" +
                                    "<strong>anteriore inferiore</strong>, ma anche per <strong>riabilitazioni</strong>" +
                                    "<strong>multiple e totali su creste severamente</strong>" +
                                    "<strong>riassorbite</strong>."} />
                            </div>
                        </div>
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12 mt-3">
                                <TextBlock title={"Performance meccaniche\n" +
                                    "elevate"} text={"Progettato senza vite di connessione tra impianto" +
                                    "e moncone, offre una stabilità e una <strong>resistenza ai</strong>" +
                                    "<strong>carichi masticatori superiori rispetto a qualsiasi</strong>" +
                                    "<strong>altro impianto di piccolo diametro</strong> disponibile sul" +
                                    "mercato*."} />
                            </div>
                        </div>

                    </div>
                    <div className="right w-full md:w-1/2 justify-center items-center">
                        <TextBlock title={"Connessione\n" +
                            "Morse 2.2\n"} text={"permette l’utilizzo dell’intera" +
                            "gamma di monconi" +
                            "a connessione verde del" +
                            "sistema implantare XCN®"} />
                        <div className="pt-8">
                            <Image
                                width={600}
                                src={Connessione29}
                                alt={"connessione-29"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
