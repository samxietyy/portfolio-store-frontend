'use client';

import { Zalando_Sans_Expanded } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const titles = Zalando_Sans_Expanded({subsets:['latin']})


export default function WelcomePopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');

        if (!hasSeenPopup) {
        setVisible(true);
        }
    }, []);

    const closePopup = () => {
        localStorage.setItem('hasSeenWelcomePopup', 'true');
        setVisible(false);
    };

    if (!visible) return null;



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className={`w-[90%] max-w-md rounded-xl bg-neutral-400 p-6 shadow-xl md:p-8 ${titles.className} text-black`}>
                <h2 className=" text-xl font-semibold ">
                    Warning
                </h2>

                <p className="mb-6 ">
                    This website is meant for demonstration purposes only. All the products listed are fictional and no real transaction is possible within this website.
                </p>

                <h2 className=" text-xl font-semibold">
                    About this project
                </h2>

                <p className='mb-6'>
                    This application was built from scratch in approximately 2 weeks and follows a mobile-firts approach. Several features were intentionally simplified to prioritize core functionalities.
                    I was the sole developer to work on this project, whose creation comes from the necessity to gain experience with state of the art technologies and practices, while showcasing my skills through an end-to-end application.
                </p>

                <p className='text-[0.75rem] mb-4'>
                    Stack
                    <br />
                    Frontend: Next.js (deployed on Vercel)
                    <br />
                    Backend: NestJS and PostgreSQL (deployed on Render)
                    <br />
                    Storage: Cloudflare R2
                </p>

                <p className='mb-4'>
                    <Link href="https://github.com/samxietyy/portfolio-store-frontend" className='pt-4 underline'>Github - frontend</Link>
                    <br />
                    <Link href="https://github.com/samxietyy/portfolio-store-backend" className='underline'>Github - backend</Link>
                </p>

                <button
                    onClick={closePopup}
                    className="w-full rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
                >
                    Close
                </button>
            </div>
        </div>
        )
}
