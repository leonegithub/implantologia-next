interface CasoClinicoProps {
    title: string;
    subtitle: string;
    text: string;
    link: string;
}

export default function CasoClinico({ title, subtitle, text, link }: CasoClinicoProps) {
    return (
        <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="red text-3xl !leading-[1.20] !mb-6">{title}</h2>
            <h3 className="font-bold">{subtitle}</h3>
            <p>{text}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 active:bg-red-800"
            >
                Consulta il caso
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 10a1 1 0 011-1h7.586L9.293 6.707a1 1 0 111.414-1.414l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 11H4a1 1 0 01-1-1z"/>
                </svg>
            </a>
        </div>
    )
}