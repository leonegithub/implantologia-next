import one from '@/../public/1.png'
import two from '@/../public/2.png'
import three from '@/../public/3.png'
import four from '@/../public/4.png'
import ConnectionComponent from "@/app/components/connectionComponent";

export default function SoluzioniCliniche() {
    return (
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-12">
            <h1 style={{lineHeight: "45px"}} className="red xl:text-3xl col-span-6">Perché scegliere gli <span className="font-bold">Impianti XCN®</span>
                Tapered con <span className="font-bold">connessione cono Morse autobloccante</span>?
            </h1>
            </div>
            <div className="elenco-container mt-15">
                <div className="md:grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <ConnectionComponent text="Mantiene intatta la salute dei tessuti peri-implantari nel lungo periodo" pic={one} />
                    </div>
                    <div className="col-span-3">
                        <ConnectionComponent text="Massimizza la stabilità meccanica" pic={two} />
                    </div>
                    <div className="col-span-2">
                        <ConnectionComponent text="Sigilla efficacemente contro le infiltrazioni batteriche" pic={three} />
                    </div>
                    <div className="col-span-2">
                        <ConnectionComponent text="Ottimizza la gestione dei tessuti molli con Platform Switching" pic={four} />
                    </div>
                </div>

            </div>

        </div>
    )
}