'use client';

import { useState } from "react";
import type { sizeStock } from "@/app/types/sizeStock";
import SizeButton from "./sizeButton"
import { Zalando_Sans_Expanded } from "next/font/google";
import { useCartStore } from "@/app/cart/cart";


const titles = Zalando_Sans_Expanded({subsets:['latin']})

export default function Atc( {sizes, sku, name, color, price, firstImage}: {sizes: sizeStock[], sku:string, name:string, color: string, price: number, firstImage: string}){
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [itemAdded, setItemAdded] = useState(false)
    const addItem = useCartStore((state) => state.addItem)
    
    
    return(
        <div className="flex flex-col items-center justify-center
                        md:w-83 md:ml-4">
            <div className="w-full h-13 mt-2 flex flex-row pl-2
                            items-center justify-start gap-1
                            md:pl-0
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

            <button className={`w-full h-14 mt-2 border-y border-neutral-700
                                text-[1rem] ${titles.className}
                                md:rounded-[0.5rem] md:border
                                transition-colors duration-300
                                ${
                                itemAdded
                                    ? 'bg-neutral-500 animate-pulse text-black '
                                    : 'bg-neutral-950 text-white'
                                }
                            `}
                    disabled={itemAdded}
                    onClick={() => {
                            if(selectedSize==null) return;

                            addItem({
                                sku: sku,
                                name: name,
                                color: color,
                                size: selectedSize,
                                price: price,
                                image: firstImage,
                                quantity: 1
                            })

                            setItemAdded(true);

                            setTimeout(() => {
                                setItemAdded(false);
                            }, 2000);
                    }}>
                {itemAdded ? 'ADDED' : 'ADD TO CART'}
            </button>
        </div>
    )

}