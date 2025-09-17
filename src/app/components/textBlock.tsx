type TextBlockProps = {
    title: string,
    text: string
}

export default function TextBlock({ title, text}: TextBlockProps) {
    return (
        <div className="pe-5">
            <h3 className="red font-bold py-4 mt-4 text-3xl">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text}} />
        </div>
    )
}