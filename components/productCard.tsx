
import Image from 'next/image'
import { Product } from "@/app/types/product";
import { Kantumruy_Pro } from "next/font/google";
import Link from 'next/link';

const kantumruy = Kantumruy_Pro({subsets:['latin']})


export default function ProductCard({product}:{product: Product}){
    const imageUrls: string[] = product.image.split(",")


    return(
        <div
            className="
                w-full
                bg-neutral-900
                flex
                flex-col
                overflow-hidden
                rounded-md
                shadow-sm
                hover:shadow-md
                transition-shadow
            ">

            {/* DEV: add product link */}
            <Link href={`/products/${product.id}`}>
            <div className="relative w-full aspect-[3/4] bg-white">
                <Image
                src={`${process.env.NEXT_R2_ENDPOINT}/product-images/${imageUrls[0]}`}
                alt={`Image of ${product.productName}`}
                fill
                className="object-cover"
                sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    (max-width: 1536px) 25vw,
                    20vw
                "
                />
            </div>


            <div className="bg-neutral-900 p-2 text-neutral-200 flex flex-col gap-0.5">
                <h1 className="text-sm sm:text-base font-semibold truncate">
                {product.productName}
                </h1>

                <p className="text-xs sm:text-sm font-medium text-neutral-400">
                {product.color}
                </p>

                <p className="text-sm sm:text-base font-semibold">
                €{product.price}
                </p>
            </div>
            </Link>

        </div>
    )
        
}