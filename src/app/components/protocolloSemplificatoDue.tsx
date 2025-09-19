"use client"

import Image from "next/image";
import OTwo from '@/../../public/O32.jpg'
import OThree from '@/../public/O35.jpg'
import tabellaThreeEight from '@/../public/tabella-3.8.png'
import {useState} from "react";

export default function ProtocolloSemplificatoDue() {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <div className="container mx-auto px-4">
            <div className="titles">
                <h3 className="red font-bold text-4xl">Impianti XCN® Narrow 3.8 Tapered</h3>
                <h2 className="red font-bold text-5xl">Protocollo chirurgico semplificato</h2>
                <div className="grid grid-cols-12">
                    <p className="col-span-6 my-3">
                        Le frese di forma, appositamente disegnate per l’impianto 3.8 Tapered, garantiscono una precisa
                        preparazione del sito implantare favorendo una stabilità primaria ottimale in tutti i tipi di osso.
                        La porzione apicale di diametro 2,8 mm in ambedue le frese ne consente l’utilizzo dopo il solo passaggio
                        della fresa pilota, diminuendo sia i tempi chirurgici che le possibilità di errore.
                    </p>
                </div>

                <div className="image-container flex gap-4">
                    <Image
                        src={OTwo}
                        alt="otwo"
                        width={400}
                        height={400}
                    />
                    <Image
                        src={OThree}
                        alt="othree"
                        width={400}
                        height={400}
                    />
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
                            className="relative p-4 w-full max-w-6xl max-h-full"
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
                                        src={tabellaThreeEight}
                                        alt="Sequenza delle frese"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}