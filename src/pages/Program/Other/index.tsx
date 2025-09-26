import {Button} from "@/components/ui/button.tsx";
import {ArrowUpRight} from "lucide-react";
import {useState} from "react";

export default function Other() {
    const itemList = [
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        },
        {
            image: "/image/item-image.png",
            title: "Lorem Jenis Sekolah",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            date: "DESEMBER 9, 2025"
        }
    ]

    const ItemCard = ({image, title, summary, date}: {
        image: string,
        title: string,
        summary: string,
        date: string
    }) => {
        return (
            <div
                className="rounded-2xl bg-white flex flex-col gap-4 justify-between w-full max-w-[406px] h-auto min-h-[300px] md:h-[428px]">
                <div className="flex flex-col gap-4 pt-2 px-4">
                    <div className="font-manrope font-semibold text-black text-lg md:text-xl lg:text-[28px]">
                        {title}
                    </div>

                    <div className="font-manrope font-semibold text-[#757575] text-sm md:text-[16px] leading-relaxed">
                        {summary}
                    </div>

                    <div className="flex flex-row sm:flex-row sm:justify-between gap-3">
                        <div
                            className="rounded-full flex border border-black-100 items-center px-3 md:px-4 py-1 text-xs md:text-sm text-[#757575] h-[35px] w-fit">
                            {date}
                        </div>
                        <Button
                            className="flex flex-row items-center rounded-full bg-[#567471] hover:bg-[#4a6260] px-3 md:px-4 py-1 font-manrope text-xs md:text-[16px] text-white h-[35px] w-fit">
                            <p>Selengkapnya</p>
                            <ArrowUpRight className="ml-1 h-3 w-3 md:h-4 md:w-4"/>
                        </Button>
                    </div>
                </div>

                <img src={image} alt="education-landing-page"
                     className="w-full h-48 md:h-[230px] object-cover rounded-b-2xl"/>
            </div>
        )
    }

    // Pagination logic
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(itemList.length / itemsPerPage);

    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentItems = itemList.slice(startIdx, startIdx + itemsPerPage);

    return (
        <div className="flex flex-col gap-8">
            <div className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-4xl md:text-6xl xl:text-[76px]">
                <span className="block">Jelajahi Program</span>
                <span className="block">Lainnya</span>
            </div>

            {/* Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {currentItems.map((item, i) => (
                    <ItemCard key={i} image={item.image} title={item.title} summary={item.summary} date={item.date}/>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
                {Array.from({length: totalPages}).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-8 h-8 rounded ${
                            currentPage === idx + 1
                                ? "bg-[#567471] text-white"
                                : "text-[#63817E]"
                        }`}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}