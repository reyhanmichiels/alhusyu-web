import Headline from "@/pages/About/Headline";
import {History} from "@/pages/About/History";
import {Mission} from "@/pages/About/Mission";

export default function About() {
    return (
        <div className="flex flex-col gap-16 px-8 my-8">
            <Headline/>
            <History/>
            <Mission/>
        </div>
    )
}