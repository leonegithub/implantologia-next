import one from '@/../public/1.png'
import two from '@/../public/2.png'
import three from '@/../public/3.png'
import four from '@/../public/4.png'
import ConnectionComponent from "@/app/components/connectionComponent";

export default function SoluzioniCliniche() {
    return (
        <div className="container mx-auto px-4 pt-4 sm:pt-8 md:!pt-12 lg:!pt-28">


                <div className="grid grid-cols-12">
                    <div className="col col-span-12 md:col-span-12 lg:col-span-7">
                    <h4 className="red text-3xl">Perché scegliere gli  <span className="font-bold">Impianti XCN® </span>
                       Tapered con <span className="font-bold">connessione cono Morse autobloccante</span>?</h4>
                    </div>
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