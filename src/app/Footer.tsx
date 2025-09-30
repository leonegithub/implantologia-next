export default function Footer() {
    return (
        <footer className="bg-gray-200">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">SERVIZI</h2>
                        <ul className="text-red-600 font-medium">
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/download.php" className="hover:underline hover:text-red-700">Downloads</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/newsletter.php" className="hover:underline hover:text-red-700">Newslist</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/assistenza-clienti.php" className="hover:underline hover:text-red-700">Assistenza clienti</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/area-riservata-login.php" className="hover:underline hover:text-red-700">Area riservata</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/azienda/whistleblowing.php" className="hover:underline hover:text-red-700">Whistleblowing</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">PUBBLICAZIONI SCIENTIFICHE</h2>
                        <ul className="text-red-600 font-medium">
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/pubblicazioni-scientifiche-ortodonzia.php" className="hover:underline hover:text-red-700">Ortodonzia</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/pubblicazioni-scientifiche-implantologia.php" className="hover:underline hover:text-red-700">Implantologia</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">QUALIT&Agrave;</h2>
                        <ul className="text-red-600 font-medium">
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/qualita/index.php" className="hover:underline hover:text-red-700">Sistema di qualità</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/qualita/schede-sicurezza.php" className="hover:underline hover:text-red-700">Schede di sicurezza</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/servizi/qualita/istruzioni.php" className="hover:underline hover:text-red-700">Istruzioni</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">Distributori</h2>
                        <ul className="text-red-600 font-medium">
                            <li className="mb-4">
                                <a href="https://leone.it/distributori/italia-ortodonzia.php" className="hover:underline hover:text-red-700">Ortodonzia</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://leone.it/distributori/italia-implantologia.php" className="hover:underline hover:text-red-700">Implantologia</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-red-600 sm:text-center">© 2025 <a
            href="https://flowbite.com/" className="hover:text-red-700">Leone S.p.A.</a> Tutti i diritti riservati.
        </span>
  <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
  {/* Facebook */}
  <a href="https://www.facebook.com/LeoneOrtodoziaImplantologia/?locale=it_IT" target="_blank" rel="noreferrer noopener" className="text-red-600 hover:text-red-700">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
      <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"/>
    </svg>
    <span className="sr-only">Facebook</span>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/leone_spa/" target="_blank" rel="noreferrer noopener" className="text-red-600 hover:text-red-700">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>
    </svg>
    <span className="sr-only">Instagram</span>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/leone-spa/?originalSubdomain=it" target="_blank" rel="noreferrer noopener" className="text-red-600 hover:text-red-700">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.229.792 24 1.771 24h20.454C23.2 24 24 23.229 24 22.278V1.723C24 .77 23.2 0 22.225 0ZM6.957 20.452H3.717V8.952h3.24v11.5ZM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608ZM20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9v-11.5h3.112v1.571h.044c.434-.82 1.494-1.685 3.073-1.685 3.289 0 3.894 2.164 3.894 4.977v6.637Z"/>
    </svg>
    <span className="sr-only">LinkedIn</span>
  </a>
</div>

                </div>
            </div>
        </footer>

    )
}