import {Button} from "@/components/ui/button.tsx";
import {ArrowUpRight} from "lucide-react";

export function Headline() {
    const FeaturedCard = ({image, title, summary, date}: {
        image: string,
        title: string,
        summary: string,
        date: string
    }) => {
        return (
            <div className="rounded-2xl bg-white flex flex-row gap-8 justify-start w-[822px] h-[428px]">
                <img src={image} alt="education-landing-page" className="w-[406px] h-[428px]"/>

                <div className="flex flex-col gap-16 py-8 pr-4">
                    <div className="font-manrope font-semibold text-black text-[28px]">
                        {title}
                    </div>

                    <div className="font-manrope font-semibold text-[#757575] text-[16px]">
                        {summary}
                    </div>

                    <div className="flex justify-between gap-3">
                        <div
                            className="rounded-full flex border border-black-100 items-center px-2 py-1 text-sm text-[#757575] h-[35px]">
                            {date}
                        </div>
                        <Button
                            className="rounded-full bg-[#567471] hover:bg-[#4a6260] px-4 py-1 text-sm text-white">
                            Selengkapnya
                            <ArrowUpRight className="ml-1 h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    const ItemCard = ({image, title, summary, date}: {
        image: string,
        title: string,
        summary: string,
        date: string
    }) => {
        return (
            <div className="rounded-2xl bg-white flex flex-col gap-0 justify-between w-[406px] h-[428px]">
                <div className="flex flex-col gap-4 pt-2 px-4">
                    <div className="font-manrope font-semibold text-black text-[28px]">
                        {title}
                    </div>

                    <div className="font-manrope font-semibold text-[#757575] text-[16px]">
                        {summary}
                    </div>

                    <div className="flex justify-between gap-3">
                        <div
                            className="rounded-full flex border border-black-100 items-center px-4 py-1 text-sm text-[#757575] h-[35px]">
                            {date}
                        </div>
                        <Button
                            className="flex flex-row items-center rounded-full bg-[#567471] hover:bg-[#4a6260] px-4 py-1 font-manrope text-[16px] text-sm text-white h-[35px]">
                            <p>Selengkapnya</p>
                            <ArrowUpRight className="ml-1 h-4 w-4"/>
                        </Button>
                    </div>
                </div>

                <img src={image} alt="education-landing-page" className="w-[406px] h-[230px]"/>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 px-8">
            <section className="w-full py-8 md:py-12">
                <div className="mx-auto flex flex-col items-center text-center gap-4 md:gap-6 px-4">
                    {/* Judul */}
                    <h2 className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-4xl md:text-6xl xl:text-[76px]">
                        <span className="block">Ikhtiar Terbaru</span>
                        <span className="block">Kami</span>
                    </h2>

                    {/* Deskripsi */}
                    <p className="font-manrope font-semibold text-[#757575]
                  text-base md:text-xl xl:text-[28px] max-w-4xl">
                        Temukan berbagai informasi terbaru tentang kegiatan, prestasi, dan agenda yayasan serta sekolah
                    </p>
                </div>
            </section>

            <div className="flex flex-row justify-between gap-4">
                <FeaturedCard
                    image="/image/featured-image.png"
                    title="Lorem Ipsum Judul Berita Judul Berita"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />

                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />

                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />
            </div>

            <div className="flex flex-row justify-start gap-2">
                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />

                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />

                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />

                <ItemCard
                    image="/image/item-image.png"
                    title="Lorem Jenis Sekolah"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat...."
                    date="DESEMBER 9, 2025"
                />
            </div>
        </div>
    )
}