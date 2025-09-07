import {useEffect, useRef, useState} from "react";
import {ChevronDown} from "lucide-react";

export default function Navbar() {
    const [eduOpen, setEduOpen] = useState(false);
    const eduRef = useRef<HTMLDivElement>(null);
    const [currentPath, setCurrentPath] = useState("/");

    useEffect(() => setCurrentPath(window.location.pathname), []);

    // close when click outside
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!eduRef.current?.contains(e.target as Node)) setEduOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    const isActive = (href: string) => (href === "/" ? currentPath === "/" : currentPath.startsWith(href));

    return (
        <header className="flex justify-between mx-4 my-4 py-4 px-8">
            <div>
                <img src="/image/navbar-logo.png" alt="Logo" />
            </div>

            {/* jadikan relatif agar panel bisa diposisikan absolut dan lebar */}
            <div className="relative">
                <nav className="flex rounded-full bg-[#63817E] gap-8 px-10 py-3 text-white text-xl font-semibold font-manrope">
                    <a className={`${isActive("/") ? "text-[#FBFED0]" : ""} hover:underline`} href="/">Beranda</a>
                    <a className={`${isActive("/tentang") ? "text-[#FBFED0]" : ""} hover:underline`} href="/tentang">Tentang</a>

                    {/* Dropdown Pendidikan (mega menu) */}
                    <div
                        className="relative"
                        ref={eduRef}
                        // onMouseLeave={() => setEduOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 hover:underline outline-none ${currentPath.startsWith("/pendidikan") ? "text-[#FBFED0]" : ""}`}
                            aria-haspopup="menu"
                            aria-expanded={eduOpen}
                            onClick={() => setEduOpen(v => !v)}
                            onMouseEnter={() => setEduOpen(true)}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") setEduOpen(false);
                                if (["ArrowDown","Enter"," "].includes(e.key)) { e.preventDefault(); setEduOpen(true); }
                            }}
                        >
                            Pendidikan <ChevronDown className="w-4 h-4" />
                        </button>

                        {eduOpen && (
                            <div
                                role="menu"
                                // panel lebar, rata tengah di bawah nav, rounded + shadow seperti contoh
                                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(90vw,72rem)] rounded-3xl border bg-white text-slate-700 shadow-xl ring-1 ring-black/5 z-50"
                                onMouseEnter={() => setEduOpen(true)}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 p-6 lg:p-8">
                                    {/* Kolom 1 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pendidikan Formal</div>
                                        <a href="/pendidikan/tk" className="block py-2 hover:text-[#63817E]">TK Al-Khusyu’</a>
                                        <a href="/pendidikan/madrasah" className="block py-2 hover:text-[#63817E]">MI Al-Khusyu’</a>
                                        <a href="/pendidikan/smp" className="block py-2 hover:text-[#63817E]">SMP Al-Khusyu’</a>
                                        <a href="/pendidikan/smk" className="block py-2 hover:text-[#63817E]">SMK Al-Khusyu’</a>
                                    </div>

                                    {/* Kolom 2 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pesantren & Tahfidz</div>
                                        <a href="/pendidikan/tahfidz" className="block py-2 hover:text-[#63817E]">Pondok Tahfidz BQ</a>
                                        <a href="/pendidikan/pesantren" className="block py-2 hover:text-[#63817E]">Pondok Pesantren</a>
                                    </div>

                                    {/* Kolom 3 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pesantren & Tahfidz</div>
                                        <a href="/pendidikan/diniyah" className="block py-2 hover:text-[#63817E]">Diniyah Al-Khusyu’</a>
                                        <a href="/pendidikan/tpq" className="block py-2 hover:text-[#63817E]">TPQ Al-Khusyu’</a>
                                        <a href="/pendidikan/bq" className="block py-2 hover:text-[#63817E]">BQ Kids Al-Khusyu’</a>
                                        <a href="/pendidikan/sanggar" className="block py-2 hover:text-[#63817E]">Sanggar Al-Qur’an Al-Khusyu’</a>
                                    </div>

                                    {/* Kolom 4 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Lembaga Sosial</div>
                                        <a href="/pendidikan/lksa" className="block py-2 hover:text-[#63817E]">LKSA Al-Khusyu’</a>
                                    </div>
                                </div>

                                {/* sudut halus + bayangan bawah */}
                                <div className="px-6 lg:px-8 pb-6">
                                    <div className="h-0.5 w-full bg-transparent shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] rounded-b-3xl"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a className={`${isActive("/kegiatan") ? "text-[#FBFED0]" : ""} hover:underline`} href="/kegiatan">Kegiatan</a>
                    <a className={`${isActive("/program") ? "text-[#FBFED0]" : ""} hover:underline`} href="/program">Program</a>
                    <a className={`${isActive("/prestasi") ? "text-[#FBFED0]" : ""} hover:underline`} href="/prestasi">Prestasi & Karya</a>
                </nav>
            </div>

            <div className="font-manrope text-xl font-medium text-right align-middle leading-none">
                <div>Mendidik dengan Hati,</div>
                <div>Membina dengan Iman</div>
            </div>
        </header>
    );
}
