// maneja toda la logica
import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";



const productos=[
  {id:1, categoria:"mouse", modelo:"Viper", marca:"Razer", img:"https://m.media-amazon.com/images/I/61M7B24YNEL._AC_SL1500_.jpg"},
  {id:2, categoria:"mouse", modelo:"Deathadder", marca:"Razer", img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/705/348/products/nb_mouse-gamer-razer-deathadder-v2-wired_ver_64ae085cde3bbdf3b8e20f4e652c29851-07084b6a077a02850f16219799326025-1024-1024.jpg"},
  {id:3, categoria:"mouse", modelo:"Superlight", marca:"Logitech", img:"https://www.venex.com.ar/products_images/1624644204_a80de4a5ab2b7edce1b93aa0801ee335.png"},
  {id:4, categoria:"mouse", modelo:"g pro", marca:"Logitech", img:"https://lonelywolfpc.com/wp-content/uploads/2021/12/pro-wired-mouse-rgb-hero-new.png"}
]


export const ItemListContainer=()=>{
  const [data, setData]= useState([]);
  
  useEffect(()=>{
    const getData= new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(productos)
      },2000)
    });
    getData.then(res => setData(res))
  },[])

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