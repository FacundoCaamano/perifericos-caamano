// maneja toda la logica
import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
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
      },2000)
    });
    if(id){
      getData.then(res => setData(res.filter(productos=>productos.categoria===id)))  
    }else{
      getData.then(res => setData(res))
    }
  },[id])

    const onAdd =(quantity)=>{
      console.log(`compraste ${quantity} unidades`)
    }

    return(
        <div>
            <div className="contenedor-boton">
              <ItemCount initial={1} stock={20} onAdd={onAdd}/>
              <ItemList data={data}/>
            </div>
        </div>
    )
}