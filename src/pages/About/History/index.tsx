export function History() {
    return (
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
                <h2 className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-2xl md:text-3xl lg:text-4xl xl:text-[57px]">
                    <span className="block">Sejarah</span>
                    <span className="block">Berdirinya</span>
                    <span className="block">Al-Khusyu'</span>
                </h2>
                <p className="font-manrope text-[#757575] text-sm md:text-base lg:text-lg xl:text-[28px] max-w-full lg:max-w-3xl leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula
                    nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero,
                    a vehicula nisl dignissim id.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
                <div className="flex flex-col gap-2">
                    <p className="font-manrope font-bold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-sm md:text-base lg:text-lg xl:text-[24px] text-[#757575] leading-relaxed">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-manrope font-bold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-sm md:text-base lg:text-lg xl:text-[24px] text-[#757575] leading-relaxed">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
                    <p className="font-manrope font-bold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-sm md:text-base lg:text-lg xl:text-[24px] text-[#757575] leading-relaxed">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            <div className="w-full max-w-full overflow-hidden">
                <img src="/image/hi-about.png" alt="logo" className="w-full h-auto max-w-none mx-auto object-cover rounded-2xl"/>
            </div>
        </div>
    )
}