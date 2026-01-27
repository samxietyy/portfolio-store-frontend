'use client';

import { useCartStore } from '@/app/cart/cart';
import Image from 'next/image'
import Link from 'next/link';



export default  function CartItem( {sku, name, color, size, price, image, quantity}:{sku: string, name: string, color:string, size:string, price:number, image:string, quantity:number}){
    const removeItem = useCartStore((state) => state.removeItem)
    return(
        <div className="w-[98%] h-22 rounded-[0.5rem] bg-neutral-900 flex flex-row items-center justify-center">
            <Link href={`/products/${sku}`} className="relative w-1/5 h-20 mx-1">
                <Image
                    src={`${process.env.NEXT_PUBLIC_R2_ENDPOINT}/product-images/${image}`}
                    alt={`Image of ${name}`}
                    fill
                    className="object-cover rounded"
                />
            </Link>

            <div className="w-2/3 h-full flex flex-col justify-center ml-2">
                <h1>{name}</h1>
                <span className='text-[0.7rem] text-neutral-400 ml-1'>{color}</span>
                <span className='text-[0.7rem] text-neutral-400 ml-1'>{size}</span>
                <span className='text-[0.7rem] text-neutral-400 ml-1'>x{quantity}</span>
            </div>

            <div className="h-full flex flex-col items-center justify-center w-1/7">
                <span className='text-[0.8rem]'>€{price}</span>
            </div>

            <button className='mx-2' onClick={() => removeItem(sku)}>
                <svg color="white" height="1.75rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            
        </div>
    )
}