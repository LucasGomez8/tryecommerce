

const GETPRODUCTS = "GETPRODUCTS";
const ADDCARRITO = "ADDCARRITO";
const DELETECARRITO = "DELETECARRITO";


export default function Reducer(state, action){
    const {payload, type} = action;

    switch(type){
        case GETPRODUCTS:
            return {...state, products: payload};

        case ADDCARRITO:
            return {
                ...state,
                carrito: [
                    ...state.carrito,
                    state.products.filter((item)=> item.id == parseInt(payload)),
                ],
            };
  
    }

}