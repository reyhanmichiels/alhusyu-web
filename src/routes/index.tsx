import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "@/layout/AppLayout.tsx";
import Home from "@/pages/Home";
import {Activity} from "@/pages/Activity";
import {Program} from "@/pages/Program";
import {Achievement} from "@/pages/Achievement";
import About from "@/pages/About";
import Madrasah from "@/pages/Education/Madrasah";
import TK from "@/pages/Education/TK";
import SMP from "@/pages/Education/SMP";
import SMK from "@/pages/Education/SMK";
import Tahfidz from "@/pages/Education/Tahfidz";
import Pesantren from "@/pages/Education/Pesantren";
import Diniyah from "@/pages/Education/Diniyah";
import TPQ from "@/pages/Education/TPQ";
import BQ from "@/pages/Education/BQ";
import Sanggar from "@/pages/Education/Sanggar";
import LKSA from "@/pages/Education/LKSA";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/kegiatan" element={<Activity/>}/>
                    <Route path="/program" element={<Program/>}/>
                    <Route path="/prestasi" element={<Achievement/>}/>
                    <Route path="/tentang" element={<About/>}/>
                    <Route path="/pendidikan/madrasah" element={<Madrasah/>}/>
                    <Route path="/pendidikan/tk" element={<TK/>}/>
                    <Route path="/pendidikan/smp" element={<SMP/>}/>
                    <Route path="/pendidikan/smk" element={<SMK/>}/>
                    <Route path="/pendidikan/tahfidz" element={<Tahfidz/>}/>
                    <Route path="/pendidikan/pesantren" element={<Pesantren/>}/>
                    <Route path="/pendidikan/diniyah" element={<Diniyah/>}/>
                    <Route path="/pendidikan/tpq" element={<TPQ/>}/>
                    <Route path="/pendidikan/bq" element={<BQ/>}/>
                    <Route path="/pendidikan/sanggar" element={<Sanggar/>}/>
                    <Route path="/pendidikan/lksa" element={<LKSA/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}