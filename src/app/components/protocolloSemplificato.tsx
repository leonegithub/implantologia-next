import TextBlock from './textBlock';
import Image from "next/image";
import ossoDthree from '@/../public/ossod3.png';
import ossoDUno from '@/../public/ossod1.png'
import ossoDQuattro from '@/../public/ossod4.png'
import Link from "next/link";

export default function ProtocolloSemplificato() {
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
        </div>
    )
}