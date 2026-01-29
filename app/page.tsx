
import Image from "next/image";
import { Zen_Dots, Michroma, Kantumruy_Pro, Zalando_Sans_Expanded } from "next/font/google";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import { Product } from "./types/product";
import WelcomePopup from "@/components/welcomePopup";

const titles = Zalando_Sans_Expanded({subsets:['latin']})
const michroma = Michroma({subsets:['latin'], weight: '400'})
 


export default async function Home() {

  async function getProducts(): Promise<Product[]> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products`,
      {
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  }

  const products = await getProducts()
  




  return (
    <div className="w-full h-full flex flex-col">
      <WelcomePopup/>

      <Link href="/products/all">
        <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/videos/home_boxe.mp4" type="video/mp4"/>
          </video>

          <div className={`absolute bottom-8 left-4`}>
            {/* <span className="cli-loader font-mono text-lg"></span> */}
            <h1 className={`text-white text-[5.5rem] leading-18 xl:ml-8 ${michroma.className}`}>Who dares wins.</h1>
            <h2 className={`ml-5 mt-4 text-[0.65rem] xl:ml-14  ${titles.className}`}>//SHOP NOW</h2>
          </div>

        </div>
      </Link>


      <div>
        <h1 className={`text-[3rem] ml-3 mt-4 
                        ml-6
                        ${titles.className}`}>New arrivals</h1>
        {products?.length==0 && (
          <div className="flex items-center justify-center w-full">  
            No products available
          </div>
        ) }
        <div className="
                w-full
                pl-1
                flex
                flex-row
                overflow-auto
                snap-start
                snap-mandatory
                gap-3
                pl-2
                ">
          {products!=null && products.map((product) => (
            <div key={product.id} className="
              shrink-0 w-1/2
              md:w-[20rem]
              lg:w-[25rem]
              ">
              
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>


      <div className="w-full">
        <h1 className={`text-[3rem] ml-3 mt-4 ${titles.className}
                        ml-6
                      `}>Lookbook</h1>

        <div className="w-full grid grid-cols-2">
          <div className="w-full aspect-4/5 relative">
            <Image src={`${process.env.NEXT_PUBLIC_R2_ENDPOINT}/lookbook/lookbook1.jpeg`} alt="Lookbook image 1" fill className="object-cover"></Image>
          </div>

          <div className="w-full aspect-4/5 relative">
            <Image src={`${process.env.NEXT_PUBLIC_R2_ENDPOINT}/lookbook/lookbook4.jpeg`} alt="Lookbook image 3" fill className="object-cover"></Image>
          </div>
          
          <div className="w-full aspect-4/5 relative" >
            <Image src={`${process.env.NEXT_PUBLIC_R2_ENDPOINT}/lookbook/lookbook2.jpeg`} alt="Lookbook image 2" fill className="object-cover"></Image>
          </div>

          <div className="w-full aspect-4/5 relative overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_ENDPOINT}/lookbook/lookbook3.jpeg`}
              alt="Lookbook image 2"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className={`${titles.className} underline text-white text-[1rem]`}>
                VIEW MORE
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
