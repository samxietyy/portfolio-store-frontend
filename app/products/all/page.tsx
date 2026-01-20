
import { Kantumruy_Pro } from "next/font/google";
import ProductCard from "@/components/productCard";
import { Product } from "@/app/types/product";
import ProductGrid from "@/components/productGrid";


const kantumruy = Kantumruy_Pro({subsets:['latin']})
const api_url = process.env.NEXT_PUBLIC_API


async function fetchProducts(): Promise<Product[]>{
    const res = await fetch(`${api_url}/products`, {method: "GET", cache: "no-store"})
    if (!res.ok) throw new Error("Failed to fetch products..")
    console.log(res.json)
    return res.json()
}



export default async function All(){
    const products: null | Product[] = await fetchProducts();

    return(
        <div>
            <div className={`w-full h-10  flex flex-row items-center justify-end ${kantumruy.className}`}>
                <div className="h-3/4 bg-neutral-300 rounded-full flex flex-row items-center border border-neutral-400 w-24 justify-evenly">
                    <svg className="text-neutral-950" height="1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    <button className="text-neutral-950">Filter</button>
                </div>

                <div className="h-3/4 bg-neutral-300 rounded-full mx-1.5 flex flex-row items-center border border-neutral-400 w-24 justify-evenly ">
                    <svg className="text-neutral-950" height="1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>

                    <button className="text-neutral-950">Sort</button>
                </div>
            </div>

            {products == null && (
                <div>No products available</div>
            )}

            {products!=null && (
                <ProductGrid products={products} />
            )}
            

        </div>
    )



}