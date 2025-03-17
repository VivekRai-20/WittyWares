import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from "../../components/breadcrums/breadcrum"
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import DescriptionBox from "../DescriptionBox/DescriptionBox"
import RelatedProducts from "../Related/Related"

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
