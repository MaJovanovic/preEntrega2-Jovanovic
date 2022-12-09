import React, { useEffect, useState } from 'react';
import Item from './Item';
import catalogo from "./catalogo";
import { useParams } from 'react-router-dom';



function ItemListContainer() {
  const {categoria}= useParams()
  
  const [items, setItems]= useState([])
  useEffect (() => {
    if (categoria){
    
      setItems (catalogo.filter(item => item.categoria == categoria))
    } else {
      setItems (catalogo)
    }
  }, [categoria]);

  const listarItems= ()=>{
    return (
    <React.Fragment>
      <h1>{categoria}</h1>
        
      {(items.map(c =>(  
        <ul>
          <li>{c.codigo}</li>
          <li>{c.descripcion}</li>
        </ul>                 
        ))
      )}       
      
    </React.Fragment>
    )
  }


  console.log(catalogo)
  console.log(items)
  return (
    <div>
      <React.Fragment>
      <div>
        {listarItems()}
      </div>
      </React.Fragment>
    </div>
      
  );
}



export default ItemListContainer;