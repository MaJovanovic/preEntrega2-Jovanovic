import React, { useEffect, useState } from 'react';
import catalogo from "./catalogo";
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
    const {cosa}= useParams()
    console.log(cosa,"id")
    console.log(catalogo)

    const [prod, setProd]= useState({})
    useEffect (() => {
        if (cosa){

        setProd (catalogo.find(item => item.codigo === cosa))
        } else {
            setProd ({codigo:"NA",descripcion: "no disponible"})
        }

        console.log(prod,"item")
    }, [prod,cosa]);

const muestraProducto = () =>{
    return (
        <React.Fragment>
            <h1>{prod.codigo}</h1>
            <h1>{prod.descripcion}</h1>           
        </React.Fragment>
    )
}


    return (
        <React.Fragment>
            <div>
                {muestraProducto()}
            </div>
        </React.Fragment>
        
    );
}



export default ItemDetailContainer;