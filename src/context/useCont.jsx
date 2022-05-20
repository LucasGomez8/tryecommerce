import axios from "axios";
import Contexto from "./context";
import Reducer from "../reducer/reducer";
import { useReducer } from "react";

export default function UseCont(props) {
  const {children} = props;
  const initialState = {
      products:[],
      carrito:[],
      category:[],
      filtered:[],
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


  const deleteCarrito = (item) => {
    dispatch({type: "DELETECARRITO", payload: item})
  };

  const getCategories = async() => {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    )

    let x= [];
    let j = 0;
    res.data.forEach((item, index, array) => {
      let isIn = false;
      for(let i= 0; i<x.length; i++){
          if(item.category == x[i]){
              isIn = true;
          }
      }
      if(isIn==false){
        x[j] = item.category;
        j++;
      }
    })
    dispatch({type: "GETCATEGORIES", payload: x})
  }

  const getFiltered = (toFilter) => {
    dispatch({type: "GETFILTERED", payload: toFilter});
  }
  
  return (
        <>
        <Contexto.Provider
        value={{
          products: state.products,
          carrito: state.carrito,
          category: state.category,
          filtered: state.filtered,
          getProducts,
          addCarrito,
          deleteCarrito,
          getCategories,
          getFiltered,
        }}
        >
        {children}
        </Contexto.Provider>
        </>
  )
}
