'use client';
import { loginSchema } from "@/schemas/login.schema";
import { registerSchema } from "@/schemas/register.schema";
import React, { useState } from "react";
import { z} from 'zod'


type LoginData = z.infer<typeof loginSchema>
type RegisterData = z.infer<typeof registerSchema>

const api_url = process.env.NEXT_PUBLIC_API



export default function UserLoginSignup(){

    const [loginForm, setLoginForm] = useState<LoginData>({
        email: '',
        password: ''
    })
    const [registerForm, setRegisterForm] = useState<RegisterData>({
        firstName: '',
        lastName: '', 
        email: '',
        password: '',
        DOB: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string|null>(null)
    const [showPanel, setPanel] = useState("login")


    async function submitLogin(e: React.FormEvent){
        e.preventDefault()

        const parseResult = loginSchema.safeParse(loginForm)
        if (!parseResult.success){
            setError(parseResult.error.issues[0].message)
            return
        }

        //api call
        setLoading(true);
        const res = await fetch(`${api_url}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(loginForm)
        })

        setLoading(false)

        if (!res.ok){
            setError("Invalid email or password.")
            return
        }

        window.location.reload()
    }

    async function submitRegistration(e: React.FormEvent){
        e.preventDefault()

        const parseResult = registerSchema.safeParse(registerForm)
        if(!parseResult.success){
            setError(parseResult.error.issues[0].message)
            return
        }
        console.log(JSON.stringify(registerForm))

        const res = await fetch(`${api_url}/auth/register`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(registerForm)
        })
        console.log(res)

        if (!res.ok){
            setError("Registration error");
            return
        }

        // Automated login after registration
        const loginRequest = await fetch(`${api_url}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                email: registerForm.email,
                password: registerForm.password
            })
        })

        if(!loginRequest.ok){
            setError("User registered, login failed.")
            return
        }

        // DEV
        console.log("Registration successful, login completed.")

        window.location.reload()
    }

    
    return(
        <div className="flex flex-col items-center ">
            <div className="w-full h-12 flex flex-row items-center justify-center my-6 text-[1.2rem]
                            md:w-[40vw] md:mt-14">
                <button className={`w-[45%] h-full border-b  ${showPanel==='login' ? "border-neutral-200 text-neutral-200" : "border-neutral-400 text-neutral-400"}`}
                    onClick={()=>setPanel("login")}>LOG IN</button>
                <button className={`w-[45%] h-full items-center border-b border-neutral-300 ${showPanel==='login' ? "border-neutral-400 text-neutral-400" : "border-neutral-200 text-neutral-200"}`} 
                    onClick={()=>setPanel("register")}>REGISTER</button>
            </div>

            {showPanel == "login" && (
                    <div className={`w-full h-full flex flex-col mt-2 
                                    md:w-[40vw]`}>
                        <form onSubmit={submitLogin} className="w-full h-full flex flex-col items-center justify-center gap-6">
                            <div className="w-[90%]">
                                <span className="self-start text-[0.75rem] pl-1">Email address *</span>
                                <input
                                    className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                    type="name" placeholder="Email Address" value={loginForm.email} onChange={(e)=>setLoginForm({...loginForm, email: e.target.value})} />
                            </div>

                            <div className="w-[90%]">
                                <span className="self-start text-[0.75rem] pl-1">Password *</span>
                                <input
                                    className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400" 
                                    type="password" placeholder="Password" value={loginForm.password} onChange={(e)=>setLoginForm({...loginForm, password: e.target.value})} />
                            </div>

                            <button type="submit" disabled={loading} className="w-[90%] h-10 bg-neutral-300 text-[1rem] text-neutral-900 mt-2">
                                {loading ? 'LOGGING IN...' : "LOG IN"}
                            </button>

                            {error && (
                                <div className="w-full text-red-800">
                                    <p className="text-center">{error}</p>
                                </div>
                            ) }
                        
                        
                        </form>
                    </div>
            )}

            {showPanel == "register" && (
                    <form onSubmit={submitRegistration} className="w-full h-full flex flex-col items-center gap-6
                                                                    md:w-[40vw]">

                        <div className="flex flex-row items-between w-[90%] gap-2">
                            <div className="w-[90%]">
                                <span className="self-start text-[0.75rem] pl-1">First name *</span>
                                <input
                                    className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                    type="string" placeholder="First name" value={registerForm.firstName} onChange={(e)=>setRegisterForm({...registerForm, firstName: e.target.value})} />
                            </div>

                            <div className="w-[90%]">
                                <span className="self-start text-[0.75rem] pl-1">Last name *</span>
                                <input
                                    className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                    type="string" placeholder="Last name" value={registerForm.lastName} onChange={(e)=>setRegisterForm({...registerForm, lastName: e.target.value})} />
                            </div>

                        </div>

                        <div className="w-[90%] ">
                            <span className="self-start text-[0.75rem] pl-1">Email address *</span>
                            <input
                                className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                type="email" placeholder="Email Address" value={registerForm.email} onChange={(e)=>setRegisterForm({...registerForm, email: e.target.value})} />
                        </div>

                        <div className="w-[90%]">
                            <span className="self-start text-[0.75rem] pl-1">Password *</span>
                            <input
                                className="w-full h-10 border border-neutral-400 rounded-[0.2rem] pl-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                type="password" placeholder="Password" value={registerForm.password} onChange={(e)=>setRegisterForm({...registerForm, password: e.target.value})} />
                        </div>

                        <div className="w-[90%]">
                            <span className="self-start text-[0.75rem] pl-1">Date of birth *</span>
                            <input
                                className="w-full h-10 border border-neutral-400 rounded-[0.2rem] px-4 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400"
                                type="date" placeholder="Date of birth" value={registerForm.DOB} onChange={(e)=>setRegisterForm({...registerForm, DOB: e.target.value})} />
                        </div>

                        <button type="submit" disabled={loading} className="w-[90%] h-10 bg-neutral-300 text-[1rem] text-neutral-900 mt-2">
                            {loading ? 'PROCESSING...' : "REGISTER"}
                        </button>

                        {error && (
                            <div className="text-red-800">
                                <p>{error}</p>
                            </div>
                        )}
                    </form>
            )}
        </div>
    )
    





}