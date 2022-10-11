import { ItemDetail } from "../ItemDetail/ItemDetail"
import React,{ useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {productos} from "../BaseDeDatos/BaseDeDatos"


export const ItemDetailContainer=()=>{
    const[data,setData]=useState({});
    const{ id }=useParams()
     useEffect(()=>{
         const getData=new Promise(resolve=>{
             setTimeout(()=>{
                 resolve(productos)
             },2000)
         });
         getData.then(res => setData(res.find(producto=>  producto.id=== parseInt(id))));
     },[id])
    
    return(
        <ItemDetail data={data}/>
    )
}