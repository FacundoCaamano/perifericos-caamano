import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
import { db } from "../../utils/firebase";
import { collection, getDocs,query,where } from "firebase/firestore";



export const ItemListContainer=()=>{
  const [data, setData]= useState([]);

  const{ id }=useParams()

  const [loading,setLoading]=useState(true)

  useEffect(()=>{

    const queryRef= id ?  query(collection(db,"productos"),where('categoria',"==",id)) : collection(db,"productos");
    getDocs(queryRef).then((respuesta)=>{
      const results= respuesta.docs;
      const docs=results.map(doc=>{
        return{
          ...doc.data(),
          id:doc.id
        
        }
        
      })
      setData(docs)
      setTimeout(()=>{
        setLoading(false)
      },1000)
    });

      
          
  },[id])


    return(
        <div>
            <div className="contenedor__items">
              {
                loading ? <p className="Loading">Cargando...</p> : <ItemList data={data}/>
              }
              
            </div>
        </div>
    )
}