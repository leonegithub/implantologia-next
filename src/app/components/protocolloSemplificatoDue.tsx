"use client"

import Image from "next/image";
import OTwo from '@/../../public/O32.jpg'
import OThree from '@/../public/O35.jpg'
import tabellaThreeEight from '@/../public/tabella-3.8.png'
import osso38_d1 from '@/../public/38-d1-d2.png';
import osso38_d2 from '@/../public/38-d3-d4.png';
import {useState} from "react";

export default function ProtocolloSemplificatoDue() {
  const [modalImageOpen, setModalImageOpen] = useState<boolean>(false); // popup "sequenza frese"
  const [videoUrl, setVideoUrl] = useState<string | null>(null);        // url video vimeo per popup

  const openVideo = (embedUrl: string) => setVideoUrl(embedUrl);
  const closeVideo = () => setVideoUrl(null);

  return (
    <div className="container mx-auto px-4">
      <div className="titles">
        <h3 className="red font-bold text-4xl">Impianti XCN® Narrow 3.8 Tapered</h3>
        <h2 className="red font-bold text-5xl !leading-[48px] mt-8 mb-8">Protocollo chirurgico semplificato</h2>

        <div className="grid grid-cols-12">
          <p className="col-span-12 md:col-span-6 my-3">
            Le frese di forma, appositamente disegnate per l’impianto 3.8 Tapered, garantiscono una precisa
            preparazione del sito implantare favorendo una stabilità primaria ottimale in tutti i tipi di osso.
            La porzione apicale di diametro 2,8 mm in ambedue le frese ne consente l’utilizzo dopo il solo passaggio
            della fresa pilota, diminuendo sia i tempi chirurgici che le possibilità di errore.
          </p>
        </div>

        {/* Blocchi immagini e video */}
        <div className="md:flex gap-10">
          {/* Colonna frese di forma */}
          <div className="image-container flex gap-6">
            <div className="pt-6">
              <div className="surtext mt-5 font-bold red text-xl">Fresa di forma Ø 3,2</div>
              <div className="invisible">Fresa di forma Ø 3,2</div>
              <Image src={OTwo} alt="Fresa di forma Ø 3,2" width={400}  />
            </div>
            <div className="pt-6">
              <div className="surtext mt-5 font-bold red text-xl">Fresa di forma Ø 3,5</div>
              <div className="red text-xl">per osso denso</div>
              <Image src={OThree} alt="Fresa di forma Ø 3,5" width={400}  />
            </div>
          </div>

          {/* Colonna procedure con bottoni video */}
            <div className="image-container flex flex-col items-center pt-6">
            <Image src={osso38_d1} alt="Procedura D1/D2" width={300} />
            <button
                type="button"
                className="mt-2 underline red text-xl text-center pt-6"
                onClick={() => openVideo("https://player.vimeo.com/video/1113517562")}
            >
                Video procedura D1/D2
            </button>

            <Image className="mt-12" src={osso38_d2} alt="Procedura D3/D4" width={300} />
            <button
                type="button"
                className="mt-2 underline red text-xl text-center"
                onClick={() => openVideo("https://player.vimeo.com/video/1113517279")}
            >
                Video procedura D3/D4
            </button>
            </div>
        </div>

        {/* Link che apre il popup immagine (sequenza frese) */}
        <h3 style={{ paddingTop: "100px" }}>
          <span
            className="text-2xl red underline cursor-pointer"
            onClick={() => setModalImageOpen(true)}
          >
            Visualizza la sequenza delle frese
          </span>
        </h3>

        {/* MODAL: Sequenza frese (immagine) */}
        {modalImageOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            onClick={() => setModalImageOpen(false)}
          >
            <div
              className="relative p-4 w-full max-w-xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sequenza delle frese
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setModalImageOpen(false)}
                    aria-label="Chiudi popup"
                  >
                    &#10005;
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4 flex justify-center">
                  <Image src={tabellaThreeEight} alt="Sequenza delle frese" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: Video (Vimeo) */}
        {videoUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            onClick={closeVideo}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                onClick={closeVideo}
                aria-label="Chiudi video"
              >
                &times;
              </button>
              {/* Wrapper responsive 16:9 */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video procedura"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
