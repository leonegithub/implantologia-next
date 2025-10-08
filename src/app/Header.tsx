"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/logo-rosso.png";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-10 fixed top-0 right-0 left-0 z-10">
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center">
            <a href="https://implantologia.leone.it/" target="_blank" rel="noreferrer">
              <Image width={150} src={logo} alt="logo-rosso" />
            </a>

            <div className="flex items-center lg:order-2">
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>

                {/* Icona hamburger */}
                <svg
                  className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Icona close */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              id="mobile-menu-2"
              className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1 justify-between items-center`}
              // chiude il menu quando si clicca un link (utile su mobile)
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.tagName === "A") setIsOpen(false);
              }}
            >

{/* --- SECONDA RIGA nel menu mobile (righe singole, allineate) --- */}
<div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-2 lg:hidden">
  <ul className="flex flex-col space-y-1">
    <li>
      <Link href="/" className="block py-2 pl-3 pr-4 red hover:text-red-800">
        Impianti Tapered series
      </Link>
    </li>
    <li>
      <Link href="/narrow-2_9-tapered" className="block py-2 pl-3 pr-4 red hover:text-red-800 font-medium">
        XCN® Narrow 2.9 Tapered
      </Link>
    </li>
    <li>
      <Link href="/narrow-3_8-tapered" className="block py-2 pl-3 pr-4 red hover:text-red-800 font-medium">
        XCN® 3.8 Tapered
      </Link>
    </li>
    <li>
      <Link href="/kit-chirurgico" className="block py-2 pl-3 pr-4 red hover:text-red-800 font-medium">
        Kit chirurgico
      </Link>
    </li>
  </ul>
</div>







              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">

                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>

                {/* Dropdown 'Azienda' (hover su desktop, click su mobile) */}
                <Dropdown
                  label="Azienda"
                  items={[
                    { href: "https://leone.it/azienda", label: "Chi siamo" },
                    { href: "https://leone.it/azienda/90-anni-leone.php", label: "90 anni Leone" },
                    { href: "https://leone.it/azienda/contatti2.php", label: "Contatti" },
                    { href: "https://leone.it/azienda/lavora-con-noi.php", label: "Lavora con noi" },
                    { href: "https://leone.it/azienda/whistleblowing.php", label: "Whistleblowing" },
                    { href: "https://leone.it/azienda/policy-privacy.php", label: "Privacy" },
                  ]}
                />

                <li>
                  <a
                    href="https://leone.it/ortodonzia/"
                    target="_blank"
                    rel="noreferrer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Ortodonzia
                  </a>
                </li>
                <li>
                  <a
                    href="https://leone.it/implantologia/"
                    target="_blank"
                    rel="noreferrer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Implantologia
                  </a>
                </li>

                <Dropdown
                  label="Servizi"
                  items={[
                    { href: "https://leone.it/servizi/corsi-online.php", label: "Formazione online", blank: true },
                    { href: "https://leone.it/servizi/qualita/", label: "Qualità", blank: true },
                    { href: "https://leone.it/servizi/newsletter.php", label: "Newslist", blank: true },
                    { href: "https://leone.it/servizi/download.php", label: "Download", blank: true },
                    { href: "https://www.3dleone.it/download", label: "File STL", blank: true },
                    { href: "https://leone.it/servizi/area-riservata-listini-login.php", label: "Listini prezzi", blank: true },
                    { href: "https://leone.it/servizi/assistenza-clienti.php", label: "Assistenza clienti", blank: true },
                  ]}
                />

                <li>
                  <a
                    href="https://www.3dleone.it/it"
                    target="_blank"
                    rel="noreferrer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    3DLeone
                  </a>
                </li>
                <li>
                  <a
                    href="https://leone.it/iso/"
                    target="_blank"
                    rel="noreferrer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Corsi ISO
                  </a>
                </li>
              </ul>





            </div>
          </div>



          {/* --- BARRA SECONDARIA: solo desktop --- */}
<div className="hidden lg:block border-t border-gray-200 dark:border-gray-700">
  <div className="red flex items-center space-x-12 py-6">
    <Link href="/" className=" hover:text-red-800">
      Impianti Tapered series
    </Link>
    <Link href="/narrow-2_9-tapered" className=" hover:text-red-800">
      XCN® Narrow 2.9 Tapered
    </Link>
    <Link href="/narrow-3_8-tapered" className=" hover:text-red-800">
      XCN® 3.8 Tapered
    </Link>
    <Link href="/kit-chirurgico" className=" hover:text-red-800">
      Kit chirurgico
    </Link>
  </div>
</div>




        </nav>
      </header>
    </div>
  );
}

/** Sottomenu: hover su desktop, click-toggle su mobile */
function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string; blank?: boolean }[];
}) {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <li className="relative group">
      <button
        className="block cursor-pointer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center w-full"
        onClick={() => setOpenMobile((v) => !v)}
      >
        {label}
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <ul
        className={`
          ${openMobile ? "block" : "hidden"} 
          absolute left-0 mt-2 min-w-[14rem] bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 rounded-md shadow-lg 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 z-50
        `}
      >
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              target={it.blank ? "_blank" : undefined}
              rel={it.blank ? "noreferrer" : undefined}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-red-700"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
