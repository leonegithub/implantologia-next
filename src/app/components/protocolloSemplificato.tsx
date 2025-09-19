"use client"

import TextBlock from './textBlock';
import Image from "next/image";
import ossoDthree from '@/../public/ossod3.png';
import ossoDUno from '@/../public/ossod1.png'
import ossoDQuattro from '@/../public/ossod4.png'
import tabellaTwoNine from '@/../public/tabella-2.9.png';
import Link from "next/link";
import {useState} from "react";

export default function ProtocolloSemplificato() {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className="container mx-auto px-4">
            <div className="titles">
                <h3 className="red font-bold text-4xl">Impianti XCN® Narrow 2.9 Tapered</h3>
                <h2 className="red font-bold text-5xl">Protocollo chirurgico semplificato</h2>
                <div className="grid grid-cols-12">
                    <p className="col-span-8">
                        Il micro e macro-design dell’impianto Narrow 2.9 facilita il raggiungimento di una stabilità primaria
                        ottimale in tutte le tipologie di osso modulando semplicemente l’utilizzo della fresa elicoidale Ø 2.8;
                        l’individualizzazione della procedura chirurgica può consentire anche il carico immediato.
                    </p>
                </div>
                <div className="grid grid-cols-12 mt-4">
                    <div className="col col-span-4">
                        <TextBlock title={"Osso media densità (D2/D3)"} text={"In caso di osso di media densità è indicato, dopo la\n" +
                            "fresa pilota, utilizzare la fresa elicoidale Ø 2.8 fino\n" +
                            "alla prima tacca di 6,5 mm indipendentemente dalla\n" +
                            "lunghezza dell’impianto prescelto."} />
                        <Image
                            src={ossoDthree}
                            alt={"osso-d3"}
                            width={400}
                            className="mt-5"
                        />
                        <div className="red underline mt-5 text-xl">
                            <Link
                                href={"https://leone.it/implantologia/video/procedure.php#3_8-D1-D2?k=W3siaWRfY2FtcGFnbmEiOm51bGwsInNvdXJjZSI6InFyIGNvZGUifV0="}
                                target="__blank"
                            >
                                Video procedura
                            </Link>
                        </div>
                    </div>
                    <div className="col col-span-4">
                        <TextBlock title={"Osso duro (D1)"} text={"In caso di osso particolarmente duro (D1) " +
                            "dopo la fresa pilota, si suggerisce di utilizzare la fresa elicoidale Ø 2.8 " +
                            "con una profondità correlata alla lunghezza dell’impianto " +
                            "prescelto (meno 2 mm della lunghezza totale).\n"} />
                        <Image
                            src={ossoDUno}
                            alt={"osso-d3"}
                            width={400}
                            className="mt-5"
                        />
                        <div className="red underline mt-5 text-xl">
                            <Link
                                href={"https://leone.it/implantologia/video/procedure.php#3_8-D3-D4?k=W3siaWRfY2FtcGFnbmEiOm51bGwsInNvdXJjZSI6InFyIGNvZGUifV0="}
                                target="__blank"
                            >
                                Video procedura
                            </Link>
                        </div>
                    </div>
                    <div className="col col-span-4">
                        <TextBlock title={"Osso molto morbido (D4)"} text={"In caso di osso di media densità è indicato, dopo la\n" +
                            "fresa pilota, utilizzare la fresa elicoidale Ø 2.8 fino\n" +
                            "alla prima tacca di 6,5 mm indipendentemente dalla\n" +
                            "lunghezza dell’impianto prescelto."} />
                        <Image
                            src={ossoDQuattro}
                            alt={"osso-d3"}
                            width={400}
                            className="mt-5 pointer-none:"
                        />
                        <div className="red underline mt-5 text-xl">
                            <Link
                                href={"https://leone.it/implantologia/video/procedure.php#3_8-D3-D4?k=W3siaWRfY2FtcGFnbmEiOm51bGwsInNvdXJjZSI6InFyIGNvZGUifV0="}
                                target="__blank"
                            >
                                Video procedura
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h3 style={{paddingTop: "100px"}}>
                <span
                    className="text-2xl red underline cursor-pointer"
                    onClick={() => setModal(true)}
                >
                    Visualizza la sequenza delle frese
                </span>
            </h3>
            {modal && (
                <div
                    id="default-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    onClick={() => setModal(false)}
                >
                    <div
                        className="relative p-4 w-full max-w-xl max-h-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sequenza delle frese
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setModal(false)}
                                >
                                    &#10005;
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4 flex justify-center">
                                <Image
                                    src={tabellaTwoNine}
                                    alt="Sequenza delle frese"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}