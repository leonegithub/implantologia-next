"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "leone:isMedico";
const TTL_DAYS = 60; // valida per 12 mesi

type StoredValue = { v: boolean; exp: number };

function readConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw) as StoredValue;
    // scaduto?
    if (!data || typeof data.v !== "boolean" || typeof data.exp !== "number") return false;
    if (Date.now() > data.exp) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
    return data.v === true;
  } catch {
    return false;
  }
}

function writeConsent(value: boolean) {
  const exp = Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000;
  const payload: StoredValue = { v: value, exp };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export default function DisclaimerModal() {
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);

  // Controllo iniziale + sync tra tab
  useEffect(() => {
    setShouldShow(!readConsent());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setShouldShow(!readConsent());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Blocca lo scroll quando il modal è visibile
  useEffect(() => {
    if (shouldShow) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [shouldShow]);

  if (shouldShow !== true) return null; // null finché non decidiamo di mostrare

  const accept = () => {
    writeConsent(true);
    setShouldShow(false);
  };

  const decline = () => {
    writeConsent(false);
    // Reindirizza a una pagina informativa o al sito corporate
    window.location.href = "https://www.leone.it"; 
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
    >
      <div className="bg-white max-w-xl w-[90%] rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 id="disclaimer-title" className="text-2xl font-bold text-red-600">
          Utilizzo del sito Leone.it
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Le informazioni presenti su questo sito sono rivolte a professionisti o esperti del settore odontoiatrico.</strong><p>
<br></br>
          </p>
Pertanto per accedere ai relativi contenuti dichiaro sotto la mia responsabilità di essere un professionista del settore odontoiatrico.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={accept}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            Entra nel sito
          </button>
    
        </div>

        <p className="mt-4 text-xs text-gray-500 !text-sm">
          La tua scelta verrà ricordata per {TTL_DAYS} giorni.  
          {/* Per test: localStorage.removeItem("leone:isMedico") */}
        </p>
      </div>
    </div>
  );
}
