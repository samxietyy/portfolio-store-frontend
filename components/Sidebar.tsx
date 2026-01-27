'use client';

import { Lora, Barlow, Zen_Dots, Zalando_Sans_Expanded } from "next/font/google";
import Link from "next/link";

const lora = Lora({
    subsets: ['latin']
})

const barlow = Barlow({
    subsets: ['latin'],
    weight: '400'
})

const zendots = Zen_Dots({
    subsets: ['latin'],
    weight: '400'
})


const titles = Zalando_Sans_Expanded({subsets:['latin']})


export default function Sidebar({open, onClose}: {open: boolean, onClose: ()=>void}) {
    return(
        <div className={`fixed top-0 right-0 h-screen bg-neutral-900 w-full md:w-1/2 xl:w-1/4 z-100
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'} `}>

            <div className="w-full h-12 flex flex-row items-center justify-between pr-4 pl-6 mt-6">

                <div className="flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <Link href={'/account'} onClick={()=>onClose()} className={`${titles.className} underline`}>Account</Link>
                </div>
                


                <svg onClick={()=>onClose()} color="white" height="2.5rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>

            <nav className="">
                <ul className={`flex flex-col items-start gap-4 pt-12 pl-8 text-2xl ${titles.className} text-gray-300 `}>
                    <li onClick={()=>onClose()}><Link href="/products/all">Products</Link></li>
                    <li onClick={()=>onClose()}><Link href="/lookbook">Lookbook</Link> <p className="text-[0.6rem]">(under construction)</p></li>
                    <li onClick={()=>onClose()}><Link href="/about">About</Link></li>
                    <li onClick={()=>onClose()}><Link href="/faq">Faq</Link></li>
                    {/* cambiare posizione account, inserire loogin piu in alto/basso */}
                </ul>
            </nav>
            


        </div>
    )






}