import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider=({children})=>{
    const [productosCarrito, setProductosCarrito]=useState([])


    const isInCart=(id)=>{
       const productExists= productosCarrito.some((elemento)=>elemento.id===id)
        return productExists
    }


    const addProduct=(item, quantity)=>{
        const productosCarritoCopy =[...productosCarrito]

        if(isInCart(item.id)){
            const posProduct=productosCarritoCopy.findIndex((elemento)=>elemento.id===item.id)
            productosCarritoCopy[posProduct].quantity += quantity
            setProductosCarrito(productosCarritoCopy)
        }else{

            const newProduct={
                ...item, 
                quantity:quantity
            }
            productosCarritoCopy.push(newProduct)
            setProductosCarrito(productosCarritoCopy)
        }

    }

    return(
        <CartContext.Provider value={{productosCarrito, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}