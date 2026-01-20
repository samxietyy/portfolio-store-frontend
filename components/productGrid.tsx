

import ProductCard from "./productCard";
import { Product } from "@/app/types/product";



export default function ProductGrid({products}:{products: Product[]}){
    return(

        <div className="w-full flex justify-center px-2 sm:px-4 lg:px-6 mt-1 md:mt-4">
            <div
                className="
                grid
                w-full
                max-w-screen-2xl
                grid-cols-2
                gap-2
                sm:gap-3
                sm:grid-cols-3
                md:grid-cols-3
                md:gap-4
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-4
                "
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )



}