'use client';

import { useState } from "react";
import type { sizeStock } from "@/app/types/sizeStock";
import SizeButton from "./sizeButton";

import { Zalando_Sans_Expanded } from "next/font/google";


const titles = Zalando_Sans_Expanded({subsets:['latin']})

export default function Atc( {sizes}: {sizes: sizeStock[]}){
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    
    return(
        <div className="flex flex-col items-center justify-center
                        md:w-83 md:ml-4">
            <div className="w-full h-13 mt-2 flex flex-row 
                            items-center justify-start gap-1
                            
                            ">
                {sizes.map( (s) => (
                    <SizeButton
                        key={s.size}
                        size={s.size}
                        inStock={s.inStock}
                        selected={selectedSize === s.size}
                        onClick={() => setSelectedSize(s.size)}
                    >
                    </SizeButton>
                ))}
            </div>

            <button className={`w-full h-14 mt-2 border-neutral-700 bg-neutral-950 ${titles.className} text-[1rem]
                                md:rounded-[0.5rem] md:border md:border-neutral-700`}>
                ADD TO CART
            </button>
        </div>
    )

}