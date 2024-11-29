"use client"

import Link from "next/link";
import TrykkMeg from "./TrykkMeg";

export default function Navbar() {

    return (
        <>
            <div 
                className="scale-[0.56] md:scale-100 fixed z-30 top-1 md:top-10 left-[50vw] translate-x-[-50%] flex gap-2 backdrop-blur-[30px] p-3 
                rounded-3xl overflow-hidden bg-[#00000061] border-4 border-[#4c4c4c32] font-bold"
            >
                <Link 
                    href="/om" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                >
                    Om faget
                </Link>
                <Link 
                    href="/prosjekter" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                >
                    Prosjekter
                </Link>
                <Link 
                    href="/kode" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                    >
                        Kode
                </Link>
            </div>
            <TrykkMeg />
        </>
    );
};