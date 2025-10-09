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

        // Aggiungi i campi automatici
        formData.append('reparto', 'servizi-marketing');
        formData.append('lingua', 'IT');

        try {
            const response = await fetch('https://php.leone.it/api/SendContatto2.php', {
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
                    if (form) form.reset();
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
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            disabled={isSubmitting}
                            className="block w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">
                            Cognome
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

                <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Indirizzo Email
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

                <div className="mt-4">
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                        Messaggio
                    </label>
                    <textarea
                        id="messaggio"
                        name="messaggio"
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    ></textarea>
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