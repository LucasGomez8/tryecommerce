import axios from "axios";
import Contexto from "./context";
import Reducer from "../reducer/reducer";
import { useReducer } from "react";

export default function UseCont(props) {
  const {children} = props;
  const initialState = {
      products:[],
      carrito:[],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    ) 
    dispatch({type: "GETPRODUCTS", payload: res.data});
  };

  const addCarrito = (item) => {
    console.log("Agregado al carrito el producto:", item);
    dispatch({type: "ADDCARRITO", payload: item});
  };


  const deleteCarrito = () => {};
  
  return (
        <>
        <Contexto.Provider
        value={{
          products: state.products,
          carrito: state.carrito,
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
