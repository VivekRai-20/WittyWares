import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = ({product}) => {
    // const product = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="productDisplay_left">
        <div className="productDisplay-img-list">
        <img src={product.image} alt="" /><img src={product.image} alt="" /><img src={product.image} alt="" /><img src={product.image} alt="" />
        </div>
        <div className="productDisplay-image">
            <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>


      </div>
      
      <div className="productDisplay_right">
        <h1>{product.name}</h1>
        <div className="productDisplay-star">
        <img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_dull_icon} alt="" />
        <p>(122)</p>
        </div>
        <div className="productDisplay-prices">
            <div className="product-price-old">₹{product.old_price}</div>
            <div className="product-price-new">₹{product.new_price}</div>

        </div>
        <div className="productDescription">
        Discover stylish and comfortable clothing designed for every occasion. Crafted with premium fabrics and modern designs, our collection offers the perfect fit for your unique style. Whether you're dressing up or keeping it casual, our versatile pieces ensure you look and feel your best. Upgrade your wardrobe today!
        </div>
        <div className="productSize">
            <h1>Select size</h1>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className='productCategory'><span>Category:</span>Women, Tshirt, Crop Top</p>
        <p className='productCategory'><span>Tags:</span>Modern,Latest</p>


      </div>
    </div>
  )
}

export default ProductDisplay
