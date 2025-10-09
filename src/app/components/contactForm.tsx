'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        // Converti i checkbox in boolean per flg_privacy e flg_comunicazioni_commerciali
        const flgPrivacy = formData.get('flg_privacy') ? "1" : "0";
        const flgComunicazioni = formData.get('flg_comunicazioni_commerciali') ?? "0";

        const k = new URLSearchParams(window.location.search).get("k");

        formData.set('flg_privacy', flgPrivacy);
        formData.set('flg_comunicazioni_commerciali', flgComunicazioni.toString());

        // Aggiungi i campi automatici
        formData.append('lingua', 'IT');
        formData.append('paese', 'IT');
        formData.append('progetto', 'implantologia.leone');
        if (k) formData.append("tracking_cookie", k)
        console.log("valore di k: ", k)

        /*formData.append("id_campagna", "4");*/

        try {
            const response = await fetch('https://php.leone.it/api/SendLead.php', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc'
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();

                if (data.ExitCode === 0) {
                    setSubmitStatus('success');
                    setErrorMessage(data.ReturnedObject || 'Messaggio inviato con successo!');
                    form.reset();
                } else if (data.ExitCode === 1) {
                    setSubmitStatus('error');
                    setErrorMessage(data.ReturnedError.join("<br/>"));
                } else {
                    setSubmitStatus('error');
                    setErrorMessage('Errore sconosciuto durante l\'invio del messaggio.');
                }
            } else {
                const errorData = await response.text();
                setSubmitStatus('error');
                setErrorMessage(`Errore: ${response.status} - ${errorData || 'Impossibile inviare il messaggio'}`);
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(`Errore di connessione: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form className="bg-white rounded-lg mt-10 mb-10" onSubmit={handleSubmit}>
                <h3 className="text-4xl font-bold mb-6 red">Contattaci</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                            Nome *
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            disabled={isSubmitting}
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">
                            Cognome *
                        </label>
                        <input
                            type="text"
                            id="cognome"
                            name="cognome"
                            required
                            disabled={isSubmitting}
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Indirizzo Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefono *
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            required
                            disabled={isSubmitting}
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 space-y-6">
                    {/* Trattamento dei dati personali */}
                    <div>
                        <h4 className="red font-semibold text-lg mb-2">Trattamento dei dati personali</h4>
                        <div className="text-sm text-gray-700 mb-3">
                            Ai sensi dell&apos;art.13 del Regolamento UE 2016/679 La informiamo che i suoi dati sono trattati nel rispetto della normativa per la tutela dei dati personali, per finalità contrattuali ed amministrative. Tali dati sono trattati con l&apos;osservanza di ogni misura cautelativa sulla sicurezza e riservatezza. <a href="#" className="text-red-600 hover:underline">Leggi l&apos;informativa completa</a>
                        </div>
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="flg_privacy"
                                value="1"
                                name="flg_privacy"
                                required
                                disabled={isSubmitting}
                                className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 disabled:cursor-not-allowed"
                            />
                            <label htmlFor="flg_privacy" className="ml-2 text-sm text-gray-700">
                                Acconsento *
                            </label>
                        </div>
                    </div>

                    {/* Iscriviti alla newslist Leone */}
                    <div>
                        <h4 className="red font-semibold text-lg mb-2">Iscriviti alla newslist Leone</h4>
                        <div className="text-sm text-gray-700 mb-3">
                            Nel rispetto del Regolamento UE 2016/679, Le chiediamo il consenso al trattamento dei suoi dati personali al fine di renderla partecipe di tutte le nostre iniziative culturali, formative (eventi, corsi, Bollettino di ortodonzia, Exacone news, etc.) e commerciali (cataloghi, offerte) da noi promosse.
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <input
                                    type="radio"
                                    id="flg_comunicazioni_si"
                                    name="flg_comunicazioni_commerciali"
                                    value="1"
                                    disabled={isSubmitting}
                                    className="mt-1 h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500 disabled:cursor-not-allowed"
                                />
                                <label htmlFor="flg_comunicazioni_si" className="ml-2 text-sm text-gray-700">
                                    Acconsento
                                </label>
                            </div>
                            <div className="flex items-start">
                                <input
                                    type="radio"
                                    id="flg_comunicazioni_no"
                                    name="flg_comunicazioni_commerciali"
                                    value="0"
                                    defaultChecked
                                    disabled={isSubmitting}
                                    className="mt-1 h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500 disabled:cursor-not-allowed"
                                />
                                <label htmlFor="flg_comunicazioni_no" className="ml-2 text-sm text-gray-700">
                                    Non Acconsento
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                </div>
            </form>

            {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                    <div dangerouslySetInnerHTML={{ __html: errorMessage || 'Messaggio inviato con successo! Ti risponderemo al più presto.' }} />
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                    <div dangerouslySetInnerHTML={{ __html: errorMessage || 'Si è verificato un errore. Riprova più tardi.' }} />
                </div>
            )}
        </>
    );
}