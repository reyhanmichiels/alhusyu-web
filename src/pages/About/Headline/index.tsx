export default function Headline() {
    return (
        <div className="flex flex-col gap-8">
            <section className="w-full py-8 md:py-12">
                <div className="mx-auto flex flex-col items-center text-center gap-4 md:gap-6 px-4">
                    <p className="font-manrope text-[#757575]
                  text-base text-[24px] max-w-4xl">
                        Mengabdi dengan Sepenuh Hati
                    </p>

                    {/* Judul */}
                    <h2 className="ulm-font font-extrabold text-black tracking-tight leading-[0.9]
                   text-[64px]">
                        <span className="block">Pelajari Lebih Lanjut</span>
                        <span className="block">Tentang Kami</span>
                    </h2>

                    {/* Deskripsi */}
                    <p className="font-manrope text-[#757575]
                  text-base text-[24px] max-w-4xl">
                        Sebuah ikhtiar tulus untuk memajukan generasi melalui program pendidikan yang berkualitas.
                    </p>
                </div>
            </section>
            <img src="/image/h-about.png" alt="logo" className="w-[551px] h-[373px] mx-auto"/>
        </div>
    )
}