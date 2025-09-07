import { Button } from "../ui/button";

export function ButtonDetail() {
    return (
        <Button className="rounded-full bg-[#567471] hover:bg-[#567471] px-8 py-8 font-manrope text-[22px]">
            Selengkapnya
            <img src="/image/button-arrow.png" alt="Logo"/>
        </Button>
    )
}