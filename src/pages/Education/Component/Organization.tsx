import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export default function Organization() {
    const organizationList = [
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "/image/organization.png"
        }

    ]
    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
                {/* Kolom kiri */}
                <div className="w-full lg:max-w-[55%] order-1 lg:order-1">
                    <h2 className="ulm-font font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-[72px] text-[#63817E] leading-tight">
                        Struktur organisasi Al-Khusyu'
                    </h2>
                </div>

                {/* Kolom kanan */}
                <div className="flex flex-col gap-2 w-full lg:max-w-[40%] order-2 lg:order-2">
                    <p className="font-manrope text-[#818181] text-sm md:text-base lg:text-lg xl:text-[28px] leading-relaxed">
                        Struktur organisasi kami terdiri dari tenaga pendidik dan staf yang profesional, berdedikasi tinggi.
                    </p>
                    <img
                        src="/image/button-quran-2.png"
                        alt="Logo"
                        className="w-24 h-10 md:w-32 md:h-14 lg:w-[162px] lg:h-[70px] object-contain"
                    />
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {organizationList.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="flex flex-col gap-0">
                                <img src={item.image} alt="logo" className="w-full h-64 md:h-80 lg:h-[350px] xl:h-[419px] object-cover rounded-2xl" />
                                <div className="w-full text-center mx-auto pt-4">
                                    <p className="font-manrope font-semibold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#567471]">
                                        {item.title}
                                    </p>
                                    <p className="font-manrope font-semibold text-base md:text-lg lg:text-xl xl:text-[20px] text-[#568872]">
                                        {item.summary}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-4 md:ml-8"/>
                <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-4 md:mr-8"/>
            </Carousel>
        </div>
    )
}