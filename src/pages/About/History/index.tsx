export function History() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-row justify-between">
                <h2 className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                   text-[57px]">
                    <span className="block">Sejarah</span>
                    <span className="block">Berdirinya</span>
                    <span className="block">Al-Khusyu'</span>
                </h2>
                <p className="font-manrope text-[#757575] text-base text-[28px] max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula
                    nisl dignissim id. Nullam placeratamet, consectetur adipiscing elit. Integer tincidunt neque libero,
                    a vehicula nisl dignissim id.
                </p>
            </div>

            <div className="flex flex-row justify-between gap-16">
                <div className="flex flex-col gap-2">
                    <p className="font-manrope font-bold text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-[24px] text-[#757575] max-w-[355px]">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-manrope font-bold text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-[24px] text-[#757575] max-w-[355px]">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-manrope font-bold text-[28px] text-black">Nilai Utama</p>
                    <p className="font-manrope text-[24px] text-[#757575] max-w-[355px]">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            <img src="/image/hi-about.png" alt="logo" className="w-[1760px] h-[295px] mx-auto"/>
        </div>
    )
}