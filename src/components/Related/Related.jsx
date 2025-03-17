import React from 'react'
import "./related.css"
import data_product from "../assets/data"
import Item from "../Item/Item"
const Related = () => {
  return (
    <div className='RelatedProducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i)=>{
            return <Item key ={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

        })}

      </div>
    </div>
  )
}

export default Related
