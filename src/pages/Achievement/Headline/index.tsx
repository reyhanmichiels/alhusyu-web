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
            <div className="rounded-2xl bg-white flex flex-row gap-8 justify-start w-[800px] h-[428px]">
                <img src={image} alt="education-landing-page" className="w-[406px] h-[428px]"/>

                <div className="flex flex-col gap-16 py-8 pr-4">
                    <div className="font-manrope font-semibold text-black text-[28px]">
                        {title}
                    </div>

                    <div className="font-manrope font-semibold text-[#757575] text-[16px]">
                        {summary}
                    </div>

                    {/*<div className="flex justify-between gap-3">*/}
                    {/*    <div*/}
                    {/*        className="rounded-full flex border border-black-100 items-center px-2 py-1 text-sm text-[#757575] h-[35px]">*/}
                    {/*        {date}*/}
                    {/*    </div>*/}
                    {/*    <Button*/}
                    {/*        className="rounded-full bg-[#567471] hover:bg-[#4a6260] px-4 py-1 text-sm text-white">*/}
                    {/*        Selengkapnya*/}
                    {/*        <ArrowUpRight className="ml-1 h-4 w-4"/>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-row justify-between">
                <h2 className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-4xl md:text-6xl xl:text-[76px] text-left">
                    <span className="block">Galeri Prestasi</span>
                    <span className="block">Al-Khusyu’</span>
                </h2>

                <div className="flex flex-col gap-2 items-end">
                    <img className="w-[256px] h-[61px]" src="/image/button-kambing.png" alt="logo"/>
                    <p className="font-manrope font-semibold text-[#757575]
                  text-base md:text-xl xl:text-[28px] max-w-4xl text-right">
                        <span className="block">Berbagai prestasi telah diraih oleh</span>
                        <span className="block">peserta didik dan tenaga pendidik di</span>
                        <span className="block">lingkungan Yayasan AL-KHUSYU.</span>

                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-row justify-between gap-4">
                    <img className="w-[500px] h-[299px]" src="/image/h-achievement-1.png" alt="logo"/>
                    <img className="w-[270px] h-[299px]" src="/image/h-achievement-2.png" alt="logo"/>
                    <img className="w-[500px] h-[299px]" src="/image/h-achievement-3.png" alt="logo"/>
                    <img className="w-[270px] h-[299px]" src="/image/h-achievement-4.png" alt="logo"/>
                </div>
                <div className="flex flex-row justify-between gap-4">
                    <img className="w-[270px] h-[299px]" src="/image/h-achievement-2.png" alt="logo"/>
                    <img className="w-[500px] h-[299px]" src="/image/h-achievement-1.png" alt="logo"/>
                    <img className="w-[270px] h-[299px]" src="/image/h-achievement-4.png" alt="logo"/>
                    <img className="w-[500px] h-[299px]" src="/image/h-achievement-3.png" alt="logo"/>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-4 mt-4">
                <Carousel
                    // className="w-full"
                    opts={{align: "start", loop: true}}
                >
                    {/* spacing antar slide */}
                    <CarouselContent>
                        {achievementList.map((item, idx) => (
                            // Lebar slide = 750px supaya match desain
                            <CarouselItem key={idx} className="pl-6 basis-1/2">
                                <CarouselCard image={item.image} title={item.title} summary={item.summary}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Tombol next di kanan tengah */}
                    <CarouselNext
                        className="absolute right-[-22px] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#567471] text-white shadow-md hover:bg-[#4b6663]"/>
                </Carousel>
                <div className="flex justify-end w-full">
                    <ButtonDetail/>
                </div>
            </div>
        </>
    )
}