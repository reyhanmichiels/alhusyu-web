import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export default function Organization() {
    const organizationList = [
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        },
        {
            title: "Sofie Ariani S.Psi",
            summary: "Kepala Sekolah",
            image: "image/organization.png"
        }

    ]
    return (
        <div className="flex flex-col gap-8 w-full bg-white rounded-2xl p-8">
            <div className="flex flex-row justify-between">
                {/* Kolom kiri */}
                <div className="max-w-2/4">
                    <h2 className="ulm-font font-extrabold text-[72px] text-[#63817E] leading-tight">
                        Struktur organisasi Al-Khusyu'
                    </h2>
                </div>

                {/* Kolom kanan */}
                <div className="flex flex-col gap-2 max-w-2/5">
                    <p className="font-manrope text-[#818181] text-[28px] leading-snug">
                        Struktur organisasi kami terdiri dari tenaga pendidik dan staf yang profesional, berdedikasi tinggi.
                    </p>
                    <img
                        src="/image/button-quran-2.png"
                        alt="Logo"
                        className="w-[162px] h-[70px]"
                    />
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent>
                    {organizationList.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-1/4">
                            <div className="flex flex-col gap-0">
                                <img src={item.image} alt="logo" className="w-full h-[419px]" />
                                <div className="w-full text-center mx-auto">
                                    <p className="font-manrope font-semibold text-[28px] text-[#567471]">
                                        {item.title}
                                    </p>
                                    <p className="font-manrope font-semibold text-[20px] text-[#568872]">
                                        {item.summary}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-8"/>
                <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-8"/>
            </Carousel>
        </div>
    )
}