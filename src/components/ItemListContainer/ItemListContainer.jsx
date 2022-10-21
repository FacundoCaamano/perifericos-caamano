// maneja toda la logica
import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
// import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
import {productos} from "../BaseDeDatos/BaseDeDatos"



export const ItemListContainer=()=>{
  const [data, setData]= useState([]);
  
  const{ id }=useParams()

  useEffect(()=>{
    const getData= new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(productos)
      },1000)
    });
    if(id){
      getData.then(res => setData(res.filter(productos=>productos.categoria===id)))  
    }else{
      getData.then(res => setData(res))
    }
  },[id])


    return(
        <div>
            <div className="contenedor__items">
              
              <ItemList data={data}/>
            </div>
        </div>
    )
}