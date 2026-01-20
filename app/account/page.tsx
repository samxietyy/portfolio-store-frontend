'use client';

import UserLoginSignup from "@/components/userLoginSignup"
import UserDashboard from "@/components/userDashboard"
import { useEffect, useState } from "react";


export default function Account(){
    const [logged, setLogged] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API}/auth/me`, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-store'
        })
        .then(res => setLogged(res.ok))
        .catch(() => setLogged(false))
    })

    if(logged) return(
        <div>
            <UserDashboard></UserDashboard>
        </div>
        
    ) 
    else return <UserLoginSignup></UserLoginSignup>


}