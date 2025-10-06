type TextBlockProps = {
  title: React.ReactNode;
  text: string;
};

export default function TextBlock({ title, text}: TextBlockProps) {
    return (
        <div className="pe-5 md:h-[330px] lg:h-[210px]">
            <h3 className="red font-bold py-4 mt-4 text-3xl sm:whitespace-normal">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text}} />
        </div>
    )
}