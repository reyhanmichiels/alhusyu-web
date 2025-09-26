export default function Headline() {
    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <section className="w-full py-6 md:py-8 lg:py-12">
                <div className="mx-auto flex flex-col items-center text-center gap-4 md:gap-6 px-4">
                    <p className="font-manrope text-[#757575]
                  text-sm md:text-base lg:text-lg xl:text-[24px] max-w-4xl leading-relaxed">
                        Mengabdi dengan Sepenuh Hati
                    </p>

                    {/* Judul */}
                    <h2 className="ulm-font font-extrabold text-black tracking-tight leading-[0.9]
                   text-2xl md:text-4xl lg:text-5xl xl:text-[64px]">
                        <span className="block">Pelajari Lebih Lanjut</span>
                        <span className="block">Tentang Kami</span>
                    </h2>

                    {/* Deskripsi */}
                    <p className="font-manrope text-[#757575]
                  text-sm md:text-base lg:text-lg xl:text-[24px] max-w-4xl leading-relaxed">
                        Sebuah ikhtiar tulus untuk memajukan generasi melalui program pendidikan yang berkualitas.
                    </p>
                </div>
            </section>
            <div className="flex justify-center px-4">
                <img src="/image/h-about.png" alt="logo" className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[551px] h-auto object-cover rounded-2xl"/>
            </div>
        </div>
    )
}