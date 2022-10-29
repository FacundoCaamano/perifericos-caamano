import "./ItemListContainer.css";
import React,{useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
import { db } from "../../utils/firebase";
import { collection, getDocs,getFirestore,query,where } from "firebase/firestore";



export const ItemListContainer=()=>{
  const [data, setData]= useState([]);

  
  
  const{ id }=useParams()

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
    });

      
          
  },[id])


    return(
        <div>
            <div className="contenedor__items">
              
              <ItemList data={data}/>
            </div>
        </div>
    )
}