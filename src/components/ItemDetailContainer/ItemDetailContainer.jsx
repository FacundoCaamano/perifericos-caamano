import { ItemDetail } from "../ItemDetail/ItemDetail"
import React,{ useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer=()=>{
    const[data,setData]=useState({});
    const{ id }=useParams()
     useEffect(()=>{
         const querydb=getFirestore()
         const queryDoc=doc(querydb,"productos",id)
         getDoc(queryDoc)
         .then(res=>setData(
            {id:res.id,
            ...res.data()
        }))
     },[])
    
    return(
        <div>
            <ItemDetail data={data}/>
        </div>
    )
}