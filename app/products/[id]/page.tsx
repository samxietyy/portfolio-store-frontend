import Image from 'next/image'
import Atc from '@/components/atc';
import type { sizeStock } from '@/app/types/sizeStock';
import { Zalando_Sans_Expanded } from 'next/font/google';


const titles = Zalando_Sans_Expanded({subsets:['latin']})

export default async function ProductPage( {params}: { params: Promise<{ id: string }>} ) {
    const productId = await params;
    let images: string[] = []
    let product: any
    let sizes: sizeStock[] = []

    try{
        // product fetch
        const productRes = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${productId.id}`, {
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            },
            cache: 'no-store'
        })
        if(!productRes.ok){
            throw new Error("Data fetch error")
        }

        product = await productRes.json()
        images = [product.image, product.image, product.image, product.image]


        // sizes fetch (passed as arguments in atc component)
        const sizeRes = await fetch(`${process.env.NEXT_PUBLIC_API}/products/sizes/${productId.id}`)
        if(!sizeRes.ok){
            throw new Error("Sizes fetch error")
        }

        sizes = await sizeRes.json()

    }catch(error){
        console.error("Fetch error:", error)
    }


    return (
        <div className="w-full h-full flex flex-col self-center

                        xl:flex-row
                        xl:items-end
                        xl:justify-center
                        2xl:px-[20%]
                        gap-6

                        ">

            
                {/* carousel */}
                <div className="
                    mt-2
                    flex
                    gap-4
                    overflow-x-auto
                    w-full
                    xl:h-full
                    mx-auto
                    pb-2
                "
                >
                    {images.map( (img, i) => (
                        <div
                            key={i}
                            className="
                                relative
                                shrink-0
                                w-full
                                md:w-[30rem]
                                lg:w-[40rem]
                                xl:w-[50rem]
                                aspect-3/4
                                snap-center
                                rounded-lg
                                overflow-
                                bg-neutral-900
                                
                            "
                        >
                            <Image
                                src={`${process.env.NEXT_R2_ENDPOINT}/product-images/${img}`}
                                alt={`Product image ${i + 1}`}
                                fill
                                className="object-cover rounded-2xl"
                                sizes="
                                    (max-width: 768px) 100vw,
                                    (max-width: 1024px) 320px,
                                    360px
                                    "
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>

                

            <div className='xl:w-full'>
                {/* product info */}
                <div className='flex flex-row items-center justify-between w-full h-8 mt-3 mb-2 px-4 
                lg:my-6 lg:px-8'>
                    <div>
                        <h1 className='text-[1.1rem]'>{product.productName}</h1>
                        <h2 className='text-neutral-400 text-[0.8rem] ml-1'>{product.color}</h2>
                    </div>
                    
                    {product.isOos ? (
                        <div className='flex flex-col items-end'>
                            <h2 className='text-[1.1rem] line-through'>€{product.price}</h2>

                            <h2 className='text-red-500 text-[0.75rem]'>OUT OF STOCK</h2>
                        </div>
                    ) : (
                        <div className='flex flex-col items-end
                        '>
                            <h2 className='text-[1.1rem]'>€{product.price}</h2>
                            <h2 className='text-neutral-500 text-[0.7rem]'>Tax. included</h2>
                        </div>
                    )}

                </div>

                
                {/* size/atc */}
                
                <Atc sizes={sizes}></Atc>

                <div className={`${titles.className} w-full  p-4`}>
                    <h1 className='text-2xl font-semibold'>Description</h1>
                    <p className=''>{product.description}</p>

                    <h1 className='text-2xl font-semibold mt-4'>Sizing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            
            </div>

        </div>
    )



}
