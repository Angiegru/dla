import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props ={
    className?: string;
};
export const Sidebar = ({ className }: Props) => {
    return (
        <div className= {cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/langLogo.png" height={40} width={40} alt="Logo"/>
                    <h1 className="text-2xl font-extrabold text-black tracking-wide">
                        DLA
                    </h1>
                </div>
            </Link>
        </div>
    );
};