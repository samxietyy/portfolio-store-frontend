'use client';

import { useEffect, useState } from "react";


export default function UserDashboard(){
    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<null | {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        DOB: string
    }>(null)

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

        //TODO fetch orders and fill orders section
        async function getOrders(){
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/getAccount`, {
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
        }



        getUser()

    }, [])
    





    return(
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-3xl self-start ml-4 mt-4">{user?.firstName} {user?.lastName}</h1>
            <h2 className="text-[1rem] self-start ml-5">{user?.email}</h2>

            <div className="h-full w-[90%] md:w-3/4 lg:w-1/2 mt-4 border border-neutral-300">
                <h1 className="ml-2">ORDERS</h1>

            </div>


            <button className="w-[90%] h-10 bg-neutral-300 text-[1rem] text-neutral-900 mt-2" onClick={logout}>LOGOUT</button>

            {error!=null && (
                <div>
                    <p>${error}</p>
                </div>
            )}
        </div>
    )



}