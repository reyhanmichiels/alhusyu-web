export default function Footer() {
    return (
        <div className="flex flex-col gap-8 rounded-2xl bg-[#63817E] my-8 mx-8 px-16 py-8">
            <div className="flex flex-row justify-between">
                <div className="max-w-1/2">
                    <h2 className="ulm-font font-extrabold text-[#FBFED0] text-[60px]">
                        <span className="block">Mendidik dengan Hati, Membina dengan Iman</span>
                    </h2>
                    <p className="font-manrope font-medium text-[32px] text-white mt-4">
                        Yayasan AL-KHUSYU berkomitmen mencetak generasi Qurani yang unggul dalam iman, ilmu, dan akhlak.
                    </p>
                </div>

                <img src="/image/footer-logo.png" alt="logo" className="w-[264px] h-[265px] my-auto"/>
            </div>

            <div className="border border-[#FBFED0]"></div>

            <div className="flex flex-row justify-start gap-8">
                <div className="max-w-1/4">
                    <p className="font-manrope font-bold text-[#FBFED0] text-[24px]">
                        Alamat
                    </p>
                    <p className="font-manrope font-bold text-white text-[24px]">
                        Bajirejo, Jalan Tanjung, Tugurejo, Kec. Wates, Kabupaten Blitar, Jawa Timur 66194
                    </p>
                </div>
                <div className="max-w-1/3">
                    <p className="font-manrope font-bold text-[#FBFED0] text-[24px]">
                        Kontak
                    </p>
                    <p className="font-manrope font-bold text-white text-[24px]">
                        0811 2345 5678
                    </p>
                    <p className="font-manrope font-bold text-white text-[24px]">
                        admin001@alkhusyu.id
                    </p>
                </div>
            </div>

            <div className="border border-[#FBFED0]"></div>

            <div className="flex flex-row justify-between">
                <p className="font-manrope font-medium text-white text-[24px]">
                    © 2025 Yayasan Pendidikan dan Sosial Al-Khusyu’. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}