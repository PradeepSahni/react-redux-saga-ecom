import { addToCart } from "./action";
import { ADD_TO_CART,REMOVE_TO_CART } from "./constant";
export const cartData = (data=[],action)=>{
    
    // if(action.type== ADD_TO_CART){
    //     return action.data;
    // }
    // else{
    //     return "No Actions data";
    // }
    switch (action.type) {
        case ADD_TO_CART:
            // add to cart logic 
            console.log('Reducer called',action)
            return [action.data,...data]
            break;
    
        case REMOVE_TO_CART:
            // add to cart logic 
            console.log('Reducer called !',action)
            return [action.data,...data]
            break;
        
        default:
            return data
            break;
    }
}