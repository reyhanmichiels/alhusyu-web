import {Headline} from "@/pages/Program/Headline";
import Other from "@/pages/Program/Other";

export function Program() {
    return (
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 md:px-8">
            <Headline/>
            <Other/>
        </div>
    )
}