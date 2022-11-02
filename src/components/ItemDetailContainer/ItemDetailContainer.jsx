import { ItemDetail } from "../ItemDetail/ItemDetail"
import React,{ useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../utils/firebase"


export const ItemDetailContainer=()=>{
    const[data,setData]=useState({});
    const{ id }=useParams()
     useEffect(()=>{
        const getProducto=async()=>{
            //referencia
            const queryRef=doc(db,"productos",id);
            const response= await getDoc(queryRef);
            const newDoc= {
                ...response.data(),
                id:response.id
            }
           setData(newDoc)
        }
        getProducto()
     },[id])
    
    return(
        <div>
            <ItemDetail data={data}/>
        </div>
    )
}