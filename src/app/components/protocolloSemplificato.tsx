"use client"

import TextBlock from './textBlock';
import Image from "next/image";
import ossoDthree from '@/../public/ossod3.png';
import ossoDUno from '@/../public/ossod1.png';
import ossoDQuattro from '@/../public/ossod4.png';
import tabellaTwoNine from '@/../public/tabella-2.9.png';
import { useState } from "react";

export default function ProtocolloSemplificato() {
  const [modal, setModal] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setVideoUrl(url);
    setModal(true);
  };

  const closeModal = () => {
    setVideoUrl(null);
    setModal(false);
  };

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

        {/* Blocchi */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-20">
          <div>
            <TextBlock
              title="Osso media densità (D2/D3)"
              text={"In caso di osso di media densità è indicato, dopo la\n" +
                "fresa pilota, utilizzare la fresa elicoidale Ø 2.8 fino\n" +
                "alla prima tacca di 6,5 mm indipendentemente dalla\n" +
                "lunghezza dell’impianto prescelto."}
            />
            <Image
              src={ossoDthree}
              alt="osso-d3"
              className="mt-5 w-full h-auto max-w-full"
            />
            <div
              className="red underline mt-5 text-xl cursor-pointer"
              onClick={() => openVideo("https://player.vimeo.com/video/1113899013")}
            >
              Video procedura
            </div>
          </div>

          <div>
            <TextBlock
              title="Osso duro (D1)"
              text={"In caso di osso particolarmente duro (D1) " +
                "dopo la fresa pilota, si suggerisce di utilizzare la fresa elicoidale Ø 2.8 " +
                "con una profondità correlata alla lunghezza dell’impianto " +
                "prescelto (meno 2 mm della lunghezza totale).\n"}
            />
            <Image
              src={ossoDUno}
              alt="osso-d1"
              className="mt-5 w-full h-auto max-w-full"
            />
            <div
              className="red underline mt-5 text-xl cursor-pointer"
              onClick={() => openVideo("https://player.vimeo.com/video/1119035192")}
            >
              Video procedura
            </div>
          </div>

          <div>
            <TextBlock
              title="Osso molto morbido (D4)"
              text={"In caso di osso molto morbido, dopo la fresa pilota, utilizzare la fresa elicoidale Ø 2.8 fino\n" +
                "alla prima tacca di 6,5 mm indipendentemente dalla\n" +
                "lunghezza dell’impianto prescelto."}
            />
            <Image
              src={ossoDQuattro}
              alt="osso-d4"
              className="mt-5 w-full h-auto max-w-full"
            />
            <div
              className="red underline mt-5 text-xl cursor-pointer"
              onClick={() => openVideo("https://player.vimeo.com/video/1113899277")}
            >
              Video procedura
            </div>
          </div>
        </div>
      </div>

      {/* Modal immagine */}
      <h3 style={{ paddingTop: "100px" }}>
        <span
          className="text-2xl red underline cursor-pointer"
          onClick={() => setModal(true)}
        >
          Visualizza la sequenza delle frese
        </span>
      </h3>

      {modal && !videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={closeModal}
        >
          <div
            className="relative p-4 w-full max-w-xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sequenza delle frese
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-900 text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="p-4 flex justify-center">
                <Image src={tabellaTwoNine} alt="Sequenza delle frese" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal video */}
      {modal && videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
