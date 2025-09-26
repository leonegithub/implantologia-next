import Image from "next/image";
import Kit from '@/../public/kit-con-scritte.png'

export default function KitChirurgico() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="red text-6xl mb-10"><span className="font-bold">Kit chirurgico </span><br/> per impianti XCN® Tapered</h2>
            <div className="grid grid-cols-12">
            <p className="col-span-6">Il kit chirurgico contiene tutti gli strumenti necessari per l’inserimento degli impianti XCN® Tapered raccolti
                in un kit di dimensioni ridottissime con un design semplice e intuitivo grazie alle linee serigrafate nel codice
                colore dell’impianto <span className="font-bold">Narrow 2.9 Tapered</span> e <span className="font-bold">3.8 Tapered</span>.
            </p>
            </div>
            <ul className="mt-10 list-inside list-disc">
                <li>fabbricato in materiale plastico PPSU</li>
                <li>completamente autoclavabile</li>
            </ul>
            <div className="kit-image my-5 w-full">
                <Image src={Kit} alt={Kit.toString()}
                />
            </div>
            <div>
                <div className="kit-inside mt-15">
                    <h2 style={{ fontWeight: 'bold', color: '#6b7c7d' }}>Contenuto del kit:</h2>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-1930-02
                            </a>{' '}
                            fresa a lancia
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-2216-52
                            </a>{' '}
                            fresa pilota corta
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-2816-53
                            </a>{' '}
                            fresa elicoidale corta Ø 2,8 mm
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-3216-55
                            </a>{' '}
                            fresa di forma corta Ø 3,2 mm per impianti 3.8 Tapered
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                151-3516-55
                            </a>{' '}
                            fresa di forma corta Ø 3,5 mm per osso denso per impianti 3.8 Tapered
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1033-00
                            </a>{' '}
                            driver High Torque per connessione 2.2
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1041-00
                            </a>{' '}
                            driver High Torque per connessione 3.0
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1002-01
                            </a>{' '}
                            raccordo per manipolo
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1019-00
                            </a>{' '}
                            prolunga per frese
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1002-00
                            </a>{' '}
                            prolunga per strumenti
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1001-01
                            </a>{' '}
                            avvitatore manuale chirurgico
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1003-00
                            </a>{' '}
                            strumento per tappi di chiusura
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1006-00
                            </a>{' '}
                            estrattore a testa esagonale
                        </li>
                        <li>
                            <span>1 pz</span>{' '}
                            <a href="#" style={{ fontWeight: 'bold', color: '#0070b6', textDecoration: 'none' }}>
                                156-1014-00
                            </a>{' '}
                            cricchetto
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}