// Constants
const COLORS = {
    primary: '#7E99C4',
    text: '#757575',
} as const;

const PROGRAM_IMAGES = [
    {src: '/program-1.png', alt: 'Activity 1'},
    {src: '/program-2.png', alt: 'Activity 2'},
    {src: '/program-3.png', alt: 'Activity 3'},
] as const;

interface ProgramItem {
    description: string;
}

const programItems: ProgramItem[] = [
    {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl"},
    {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl"},
    {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl"},
    {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl"},
];

const ProgramList = ({items}: { items: ProgramItem[] }) => (
    <ul className="space-y-6">
        {items.map((item, index) => (
            <li key={index}>
                <p className="font-extralight text-[28px]" style={{color: COLORS.text}}>
                    {item.description}
                </p>
                <hr className="border-t border-gray-300 mt-2"/>
            </li>
        ))}
    </ul>
);

const ImageGallery = () => (
    <div className="flex-1 space-y-4 h-full">
        <img
            src={PROGRAM_IMAGES[0].src}
            alt={PROGRAM_IMAGES[0].alt}
            className="rounded-xl w-full"
        />
        <div className="grid grid-cols-2 gap-4">
            <img
                src={PROGRAM_IMAGES[1].src}
                alt={PROGRAM_IMAGES[1].alt}
                className="rounded-xl"
            />
            <img
                src={PROGRAM_IMAGES[2].src}
                alt={PROGRAM_IMAGES[2].alt}
                className="w-[300px] h-[240px] rounded-xl"
            />
        </div>
    </div>
);

export default function ProgramSection() {
    return (
        <section className="w-full h-screen px-12 py-24 bg-white mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6 h-full">
                <h1 className="text-[70px] font-extrabold uppercase ulm-font" style={{color: COLORS.primary}}>
                    Program Unggulan Kami
                </h1>
                <ProgramList items={programItems}/>
            </div>
            <ImageGallery/>
        </section>
    );
}