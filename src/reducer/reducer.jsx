

const GETPRODUCTS = "GETPRODUCTS";
const ADDCARRITO = "ADDCARRITO";
const DELETECARRITO = "DELETECARRITO";
const GETCATEGORIES = "GETCATEGORIES";
const GETFILTERED = "GETFILTERED";
const CARTFILL = "CARTFILL";


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

        case DELETECARRITO: 
            return{
                ...state,
                carrito: state.carrito.filter((item) => item[0].id !== parseInt(payload)),
            }

        case GETCATEGORIES:
            return{
                ...state,
                category: payload
            };

        case GETFILTERED:
            return{
                ...state,
                filtered: state.products.filter((item) => item.category == payload)
            }

    }

}