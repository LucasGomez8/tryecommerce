import axios from "axios";
import Contexto from "./context";
import { useState } from "react";

export default function UseCont(props) {
    const {children} = props;
    const [estado, setEstado] = useState([]);

  const initialState = {
      products:[],
      carrito:[],
  };

  const getProducts = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    ) 
    setEstado(res.data);
    console.log(res.data); 
  };

  const addCarrito = (item) => {
    console.log("Agregado al carrito",item);
  };
  
  const deleteCarrito = () => {};
    
  return (
        <>
        <Contexto.Provider
        value={{
          products: estado,
          //carrito: initialSstate.carrito
          getProducts,
          addCarrito,
          deleteCarrito,
        }}
        >
        {children}
        </Contexto.Provider>
        </>
  )
}
