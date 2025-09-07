import { Outlet } from "react-router";
import Navbar from "@/layout/component/Navbar.tsx";
import Footer from "@/layout/component/Footer.tsx";

export default function AppLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}