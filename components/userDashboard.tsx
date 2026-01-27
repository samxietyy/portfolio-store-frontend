'use client';

import { Zalando_Sans_Expanded } from "next/font/google";
import { useEffect, useState } from "react";


const titles = Zalando_Sans_Expanded({subsets:['latin']})




export default function UserDashboard(){
    const [error, setError] = useState<string | null>(null)
    const [orders, setOrders] = useState<null | { 
        createdAt: string,
        id: string,
        status: string,
        totalPrice: number,
        userId: string
    }[]>(null)
    

    const [user, setUser] = useState<null | {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        DOB: string
    }>(null)

    const [ordersTab, setOrdersTab] = useState(false)

    async function logout(){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        })
        
        if(!res.ok){
            setError("Something went wrong. Try again.")
            return
        }
        
        window.location.reload()
   
    }

    



    
    useEffect( () => {
        async function getUser(){
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/getAccount`, {
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })

            if(!res.ok){
                setError("Unable to fetch user data.")
                return
            }

            const userData = await res.json()
            setUser(userData)
        }

        async function getOrders(){
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/orders`, {
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
            if(!res.ok){
                setError("Unable to fetch orders.")
            }
            
            const resOrders = await res.json()
            setOrders(resOrders)

        }




        getUser()
        getOrders()

    }, [])
    




    return(
        <div className={`w-full min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center ${titles.className}`}>
            
            <div className="w-full flex-1  flex flex-col items-center bg-neutral-900
                            rounded-2xl
                            md:w-3/4 
                            lg:w-1/2 lg:my-4">

                <div className="w-full flex flex-col items-center md:flex-row ">
                    <div className="w-full">
                        <h1 className="text-2xl self-start ml-5 mt-4">{user?.firstName} {user?.lastName}</h1>
                        <h2 className="text-[1rem] self-start ml-5">{user?.email}</h2>
                    </div>
                    
                    <button className="w-[90%] h-6 bg-neutral-300 text-[0.75rem] text-neutral-900 mt-2
                                        md:w-[10rem]
                                        md:mr-5
                    " onClick={logout}>LOGOUT</button>
                </div>

                <div onClick={()=>setOrdersTab(!ordersTab)} className="h-8 w-[90%] flex flex-row items-center justify-between px-2 mb-2
                                mt-4  border border-neutral-300">
                    <h1 className="text-[0.8rem]">ORDERS</h1>
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>


                {ordersTab && (
                    <div className="w-[90%] flex flex-col text-[0.75rem]">
                        {orders?.map((order) => (
                            <div key={order.id} className="w-full h-6 px-2 flex flex-row items-center justify-between border-l-4 ">
                                <span className="w-1/3">{new Date(order.createdAt).toLocaleDateString()}</span>
                                <span className="w-1/3 text-center">{order.status}</span>
                                <span className="w-1/3 text-right">{order.totalPrice}€</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            


    



            

            {error!=null && (
                <div>
                    <p>${error}</p>
                </div>
            )}
        </div>
    )



}