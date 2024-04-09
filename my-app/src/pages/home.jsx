import React from 'react'
import Header from '../components/home/Header'
import SliderMain from '../components/home/Slider'
import CollectionNewProducts from '../components/home/CollectionNewProducts'
import CollectionCategories from '../components/home/CollectionCategories'
import ButtonEmail from '../components/home/ButtonEmail'
import ProductMore from '../components/home/ProductMore'
// import Product from '../components/home/Product'

function Home({setId}) {
  return (
    <div>
        <Header />
        {/* <Product /> */}
        <SliderMain/>
        <CollectionNewProducts/>
        <CollectionCategories setId={setId}/>
        <ButtonEmail/>
        <ProductMore/>
    </div>
  )
}

export default Home