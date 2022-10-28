// maneja toda la logica
import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
//import {productos} from "../BaseDeDatos/BaseDeDatos"
import { collection, getDocs,getFirestore,query,where } from "firebase/firestore";



export const ItemListContainer=()=>{
  const [data, setData]= useState([]);

  
  
  const{ id }=useParams()

  useEffect(()=>{
        const querydb=getFirestore()
        const queryColection=collection(querydb, "productos")
        if(id){
           const queryFilter=query(queryColection,where('categoria','==',id))
           getDocs(queryFilter)
           .then(res=>setData(res.docs.map(producto=>({id:producto.id,...producto.data()}))))
                 
              }else{
                getDocs(queryColection)
                .then(res=>setData(res.docs.map(producto=>({id:producto.id,...producto.data()}))))
                }  
               
        
      // const getData=async()=>{
      //   const querydb=getFirestore()
      //   const queryColection=collection(db,"productos") 
      //   const queryRef = query(queryColection, where("categoria","==",id))
      //   //obtenemos todos los documentos
      //   const response= await getDocs(queryRef)
      //   const documents=response.docs
     
      //   const result=documents.map(elemento=>{
      //     return(
      //       {
      //         ...elemento.data(),
      //         id:elemento.id
      //       })
      //   })
      //   console.log(result)
      //   setData(result)
      //  }
       
           
  },[id])


    return(
        <div>
            <div className="contenedor__items">
              
              <ItemList data={data}/>
            </div>
        </div>
    )
}