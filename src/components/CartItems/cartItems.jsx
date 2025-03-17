import React, { useContext } from 'react';
import "./cartItems.css";
import { ShopContext } from '../../context/ShopContext';
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
    const { all_products, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    if (!all_products || !Array.isArray(all_products)) {
        return <div>Loading products...</div>;
    }

    return (
        <div className='cartItems'>
            <div className="cartItemFormat-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItemsFormat">
                                <img src={e.image} alt="" className="catIcon-productIcon" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='cartItem-quantity'>{cartItem[e.id]}</button>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <img className='remove_icon' src={removeIcon} onClick={() => removeFromCart(e.id)} alt="" />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-totalItems">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-totalItems">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-totalItems">
                            <h1>Total</h1>
                            <h1>₹{getTotalCartAmount()}</h1>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;