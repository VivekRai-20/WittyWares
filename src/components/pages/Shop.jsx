import React from 'react'
import Hero from "../Hero/hero"
import Popular from '../Popular/Popular'
import Offers from "../Offers/Offers"
import NewCollections from "../NewCollections/NewCollections"
import NewsLetters from "../NewsLetter/NewsLetter"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetters/>
    </div>
  )
}

export default Shop
