import TextBlock from "@/app/components/textBlock";
import Image from "next/image";
import Connessione38 from '@/../public/sequenza-38.png'

export default function OneForAll() {
    return (
        <div className="general">
            <div className="container mx-auto px-4">
                <div className="first-page-title">
                    <h1 className="text-6xl mb-4 red font-bold">
                        <div>One for all</div>
                    </h1>
                </div>
                <div className="text-container flex flex-col md:flex-row gap-20">
                    <div className="left w-full md:w-1/2">
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12">
                                <TextBlock title={"Small, but strong"} text={"Solo 3,8 mm di diametro, perfetto per <strong>creste sottili</strong>\n" +
                                    "e tutte le <strong>aree della bocca<strong>, dai <strong>settori anteriori ai</strong>\n" +
                                    "<strong>posteriori</strong>."} />
                            </div>
                        </div>
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12">
                                <TextBlock title={"Eccellenza funzionale ed estetica"} text={"La connessione autobloccante impianti-moncone,\n" +
                                    "che non necessita di una vite, garantisce stabilità a\n" +
                                    "lungo termine e risultati estetici di alto livello grazie\n" +
                                    "al Platform Switching design, all’efficacia del sigillo\n" +
                                    "microbiologico e all’assenza di micromovimenti."} />
                            </div>
                        </div>
                        <div className="info-block grid grid-cols-1 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-12 mt-3">
                                <TextBlock title={"Adattabilità completa"} text={"È indicato per <strong>tutte le sedi edentule</strong> e supporta\n" +
                                    "ogni tipo di soluzione protesica, dalle riabilitazioni\n" +
                                    "singole a quelle multiple o totali, grazie al micro\n" +
                                    "e macro-design della fixture e all’efficienza della\n" +
                                    "connessione Morse gialla, collaudata da oltre 25\n" +
                                    "anni in migliaia di casi clinici."} />
                            </div>
                        </div>

                    </div>
                    <div className="right w-full md:w-1/2 justify-center items-center">
                        <TextBlock title={"Connessione\n" +
                            "Morse 3.0"} text={"La resistenza meccanica\n" +
                            "della connessione,\n" +
                            "ampiamente superiore\n" +
                            "alle sistematiche avvitate,\n" +
                            "garantisce la massima\n" +
                            "affidabilità*"} />
                        <div className="pt-8">
                            <Image
                                width={600}
                                src={Connessione38}
                                alt={"connessione-29"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
