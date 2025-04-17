import React , {createContext, useState} from 'react';
import all_products from "../components/assets/all_product"


export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;

}
const ShopContextProvider =(props)=>{
    const [cartItem, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({
            ...prev,[itemId]: prev[itemId]+1
        }))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({
            ...prev,[itemId]: prev[itemId]-1
        }))
    }

    const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItem) {
        if (cartItem[item] > 0) {
            let itemInfo = all_products.find((product) => product.id === Number(item));
            if (itemInfo) {
                TotalAmount += itemInfo.new_price * cartItem[item];
            }
        }
    }
    return TotalAmount;
};
    

    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItems += cartItem[item]
                
            }
        }
        return totalItems;
    }

    const contextValue = {all_products,cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value= {contextValue}>
        {props.children}

        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
