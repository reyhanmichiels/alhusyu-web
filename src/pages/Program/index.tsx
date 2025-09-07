import {Headline} from "@/pages/Program/Headline";
import Other from "@/pages/Program/Other";

export function Program() {
    return (
        <div className="flex flex-col gap-16 px-8">
            <Headline/>
            <Other/>
        </div>
    )
}