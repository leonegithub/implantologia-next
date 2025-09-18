import TextBlock from './textBlock';
import Image from "next/image";
import OTwo from '@/../../public/O32.png'
import OThree from '@/../public/O35.png'
import ossoDthree from '@/../public/ossod3.png';
import ossoDUno from '@/../public/ossod1.png'
import ossoDQuattro from '@/../public/ossod4.png'
import Link from "next/link";

export default function ProtocolloSemplificatoDue() {
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
                {/*<div className="grid grid-cols-12 mt-4">
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
                </div>*/}
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


            </div>
        </div>
    )
}