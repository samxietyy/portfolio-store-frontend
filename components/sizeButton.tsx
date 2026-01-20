'use client';


export default function SizeButton( {size, inStock, selected, onClick}: 
    { size: string, inStock: boolean, selected: boolean, onClick:()=>void }){

    return (
        <button
            disabled={!inStock}
            onClick={onClick}
            className={`aspect-square h-full border border-neutral-700 rounded-[0.4rem]
                ${!inStock 
                    ? "bg-neutral-800"
                    : selected
                    ? "bg-neutral-700 border-neutral-900"
                    : "bg-neutral-950"}
                `}
            >

            <span className={`
                text-[0.85rem]    
                ${inStock ? "" : "text-neutral-400 line-through"}
                `}>{size}
            </span>

        </button>
    )
}