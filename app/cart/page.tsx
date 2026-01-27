'use client';

import { Zalando_Sans_Expanded } from "next/font/google"
import { useCartStore } from "./cart";
import CartItem from "@/components/cartitem";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const titles = Zalando_Sans_Expanded({subsets:['latin']})


export default function Cart(){
    const items = useCartStore((state) => state.items)
    const clearCart = useCartStore((state) => state.clearCart)
    const [orderCreated, setOrderCreated] = useState(false)
    const [orderId, setOrderId] = useState<string|null>(null)
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

    const totalPrice = useMemo(() => {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }, [items])

    async function submitOrder(){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/order/createOrder`, ({
            method: 'POST',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {orderPrice: totalPrice} )
        }))

        if(!res.ok){
            console.log("Unable to create order.")
        }

        const order = await res.json()
        setOrderId(order.orderId)
        setOrderCreated(true)
        clearCart()
    }



    if (items.length === 0) {
        return (
            <div className={`w-screen h-[calc(100vh-11rem)] flex flex-col items-center justify-center ${titles.className}`}>
            {orderCreated ? (
                <div className="text-center">
                    <h1>
                        Thank you!
                        <br />
                        Order created
                    </h1>
                    <h2 className="text-[0.75rem]">{orderId}</h2>
                    
                </div>
            ) : (
                <h1 className="text-xl">
                Your cart is empty
                </h1>
            )}
            </div>
        );
    }



    return (
        <div className={`w-full h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)] flex flex-col items-center ${titles.className}
                         `}>
           
            <div className="w-full flex-col lg:w-3/4">
                <h1 className="text-[2rem] ml-4 mb-2">Your cart</h1>
                <div className="flex flex-col items-center gap-2">
                    {items.map((cartItem) => (
                        <CartItem key={`${cartItem.sku}-${cartItem.color}-${cartItem.size} `} sku={cartItem.sku} name={cartItem.name} color={cartItem.color} size={cartItem.size}
                            price={cartItem.price} image={cartItem.image} quantity={cartItem.quantity}
                        /> 
                    ))}
                </div>

                {items.length!=0 && (
                    <div className="w-full h-20 bg-neutral-900 flex flex-row items-center justify-between px-4
                            absolute bottom-20 left-0
                            ">
                    <h1>Total: €{totalPrice}</h1>

                    {logged ? (
                        <button onClick={()=>submitOrder()} className="border border-neutral-400 bg-neutral-600 rounded-2xl p-2">Checkout</button>
                    ) : (
                        <Link href={"/account"} className="border border-neutral-400 bg-neutral-600 rounded-2xl p-2">
                            Log in to checkout
                        </Link>
                            
                        
                    )}

                    
                </div>
                )}
                
                
            </div>

        </div>
    )


}