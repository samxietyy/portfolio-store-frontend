"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Barlow, Lora, Zalando_Sans_Expanded, Zen_Dots } from "next/font/google";
import Link from "next/link";



const zendots = Zen_Dots({subsets: ['latin'],weight: '400'})
const titles = Zalando_Sans_Expanded({subsets:['latin']})

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="min-w-full max-w-full h-12 flex flex-row justify-between">
            
            <Link href='/' className="flex justify-start items-center flex-1 pl-2 ">
                <h1 className={`w-3/4 min-w-[16rem] max-w-[25rem] text-center text-neutral-800 text-[1.570rem] leading-tight rounded-3xl bg-neutral-300 ${zendots.className}
                 border-gray-950`}>CHAIN CLO</h1>
            </Link>

            <div className={`hidden md:flex flex-row items-center gap-6 text-[0.75rem] mr-2  ${titles.className}`}>
                <Link href='/products/all'>Products</Link>
                <Link href='/lookbook'>Lookbook</Link>
                <Link href='/account'>Account</Link>
                <Link href='/about'>About</Link>
                <Link href='/faq'>Faq</Link>
            </div>


            <Link href="/cart" className="w-12 flex items-center justify-center">
                <svg className="text-neutral-200" width="1.5rem" height="2rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </Link>

            <div className="w-12 flex justify-center items-center md:hidden" onClick={() => setOpen(true)}>
                <svg className="text-neutral-200" width="1.5rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <Sidebar open={open} onClose={()=>setOpen(false)} />

        </nav>

    )
}