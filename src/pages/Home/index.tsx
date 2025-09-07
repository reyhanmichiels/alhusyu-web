import {Achievement} from "@/pages/Home/Achievement";
import {News} from "@/pages/Home/News";
import {Education} from "@/pages/Home/Education";
import {Program} from "@/pages/Home/Program";
import {Mission} from "@/pages/Home/Mission";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-16">
                <Achievement/>
                <News/>
                <Education/>
                <Program/>
                <Mission/>
            </div>
        </>
    )
}