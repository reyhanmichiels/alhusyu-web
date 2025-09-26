import {Carousel, CarouselContent, CarouselItem, CarouselNext} from "@/components/ui/carousel.tsx";
import {ButtonDetail} from "@/components/ButtonDetail";

export function Headline() {
    const achievementList = [
        {
            image: "/image/featured-image.png",
            title: "Juara 1 lomba marathon putri",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero"
        },
        {
            image: "/image/featured-image.png",
            title: "Juara 1 lomba marathon putri",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero"
        },
        {
            image: "/image/featured-image.png",
            title: "Juara 1 lomba marathon putri",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero"
        },
    ]

    const CarouselCard = ({image, title, summary}: {
        image: string,
        title: string,
        summary: string,
    }) => {
        return (
            <div className="rounded-2xl bg-white flex flex-col md:flex-row gap-4 md:gap-6 justify-start w-full max-w-full md:max-w-[700px] h-auto md:h-[350px]">
                <img src={image} alt="education-landing-page" className="w-full md:w-[300px] h-48 md:h-[350px] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"/>

                <div className="flex flex-col gap-4 md:gap-8 p-4 md:py-6 md:pr-4">
                    <div className="font-manrope font-semibold text-black text-base md:text-lg lg:text-xl">
                        {title}
                    </div>

                    <div className="font-manrope font-semibold text-[#757575] text-xs md:text-sm leading-relaxed">
                        {summary}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
                <h2 className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-3xl md:text-4xl lg:text-6xl xl:text-[76px] text-left">
                    <span className="block">Galeri Prestasi</span>
                    <span className="block">Al-Khusyu'</span>
                </h2>

                <div className="flex flex-col gap-4 lg:gap-2 lg:items-end">
                    <img className="w-32 h-8 md:w-48 md:h-12 lg:w-[256px] lg:h-[61px] object-contain" src="/image/button-kambing.png" alt="logo"/>
                    <p className="font-manrope font-semibold text-[#757575]
                  text-sm md:text-base lg:text-xl xl:text-[28px] max-w-full lg:max-w-4xl lg:text-right">
                        <span className="block">Berbagai prestasi telah diraih oleh</span>
                        <span className="block">peserta didik dan tenaga pendidik di</span>
                        <span className="block">lingkungan Yayasan AL-KHUSYU.</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8">
                {/* First row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    <img className="w-full h-32 md:h-48 lg:h-[299px] object-cover rounded-lg col-span-1 md:col-span-2" src="/image/h-achievement-1.png" alt="achievement"/>
                    <img className="w-full h-32 md:h-48 lg:h-[299px] object-cover rounded-lg" src="/image/h-achievement-2.png" alt="achievement"/>
                    <img className="w-full h-32 md:h-48 lg:h-[299px] object-cover rounded-lg col-span-1 md:col-span-1" src="/image/h-achievement-3.png" alt="achievement"/>
                </div>
                {/* Second row - only show on desktop */}
                <div className="hidden md:grid md:grid-cols-4 gap-2 md:gap-4">
                    <img className="w-full h-48 lg:h-[299px] object-cover rounded-lg" src="/image/h-achievement-4.png" alt="achievement"/>
                    <img className="w-full h-48 lg:h-[299px] object-cover rounded-lg col-span-2" src="/image/h-achievement-1.png" alt="achievement"/>
                    <img className="w-full h-48 lg:h-[299px] object-cover rounded-lg" src="/image/h-achievement-2.png" alt="achievement"/>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-4 mt-6 md:mt-8">
                <Carousel
                    className="w-full"
                    opts={{align: "start", loop: true}}
                >
                    {/* spacing antar slide */}
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {achievementList.map((item, idx) => (
                            <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                                <CarouselCard image={item.image} title={item.title} summary={item.summary}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Tombol next di kanan tengah */}
                    <CarouselNext
                        className="absolute right-[-16px] md:right-[-22px] top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 rounded-full bg-[#567471] text-white shadow-md hover:bg-[#4b6663]"/>
                </Carousel>
                <div className="flex justify-center md:justify-end w-full mt-4">
                    <ButtonDetail/>
                </div>
            </div>
        </>
    )
}