import Link from "next/link";
import PicTextHome from "@/app/components/PicTextHome";
import One from '@/../public/1.png'
import Two from '@/../public/2.png'
import Three from '@/../public/3.png'
import Four from '@/../public/4.png'

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-12">
                <h1 style={{marginBottom: "75px"}} className="col-span-9 text-5xl red">Perché scegliere gli <span className="font-bold">Impianti XCN®</span>
                    Tapered con <span className="font-bold">connessione cono Morse autobloccante</span>?
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <PicTextHome text={"Mantiene intatta la salute dei tessuti\n" +
                    "peri-implantari nel lungo periodo"}
                             picture={One}
                />
                <PicTextHome
                    text={"Massimizza la stabilità meccanica"}
                    picture={Two}
                />
                <PicTextHome
                    text={"Sigilla efficacemente contro le infiltrazioni\n" +
                    "batteriche"}
                    picture={Three}
                />
                <PicTextHome
                    text={"Ottimizza la gestione dei tessuti molli con\n" +
                        "Platform Switching"}
                    picture={Four}
                />
            </div>

            <div className="grid grid-cols-12">
                <div className="col col-span-6">
                    <Link className="red text-2xl underline" href={"/narrow-2_9-tapered"}><span className="font-bold">XCN® Narrow 2.9</span> Tapered</Link>

                </div>
                <div className="col col-span-6">
                <Link className="red underline text-2xl" href={"narrow-3_8-tapered"}><span className="font-bold">XCN® 3.8</span> Tapered</Link>
                </div>
            </div>
        </div>
  );
}
