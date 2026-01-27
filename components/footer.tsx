import { Zalando_Sans_Expanded, Zen_Dots } from "next/font/google";
import Link from "next/link";


const titles = Zalando_Sans_Expanded({subsets:['latin']})
const zendots = Zen_Dots({subsets: ['latin'],weight: '400'})

export default function Footer(){
    return (
        <div className={`w-full h-30 flex flex-row justify-between border-neutral-400
                        px-10 md:px-20 ${titles.className} 
                        lg:h-20 
                        
                        `}>
            <div className={`pl-6 flex flex-col lg:flex-row lg:gap-4 items-center justify-center text-[0.8rem]`}>
                <Link href='/products/all'>Products</Link>
                <Link href="/lookbook">Lookbook</Link>
                <Link href="/about">About</Link>
                <Link href="/faq">FAQ</Link>

            </div>

            <div className=" flex flex-col items-center justify-center">
                <h1 className={`max-w-[15rem] text-center text-neutral-800 text-[1rem] rounded-3xl
                bg-neutral-300 ${zendots.className}
                border-b border-gray-950 px-2 mb-1`}>CHAIN CLO</h1>
                <h1 className="text-[0.7rem]">© 2026, Chain Clo.</h1>
            </div>
        </div>
    )
}