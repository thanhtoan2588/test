import React, { useEffect, useState } from 'react'
import "../../styles/home/collectionNewProducts.css"

import Slider from "react-slick";
// import "../../styles/home/slider.css"
import "slick-carousel/slick/slick-theme-2.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import axios from 'axios'
import { MdAddShoppingCart } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    lazyLoad: true, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
};

const APIAllProducts = "https://fakestoreapi.com/products"

function CollectionNewProducts() {

    const slider = React.useRef(null);

    const [dataAllProducts, setDataAllProducts] = useState([])

    useEffect(() => {
        const fetchApiAllProducts = axios.get(APIAllProducts)
        fetchApiAllProducts.then((data) => {setDataAllProducts(data.data)})
    },[])

    // console.log(dataAllProducts);

  return (

    <div data-aos="zoom-in-up" className='product-container'>
        <h1>Sản phẩm mới</h1>
        <div className='product-container-slider'>
        <button className='product-container-slider-prev' onClick={() => slider?.current?.slickPrev()}> <FaArrowLeft /></button>
          <Slider  ref={slider} {...settings}>
          {
                dataAllProducts.map((item) => {
                    return (
                      <>
                        <div className='product-item'>
                          {/* {console.log(item.title.slice(0,3)+"...")} */}
                          <div className='product-item-image'>
                            <img src={item.image} alt={item.title} />
                            <p>{item.rating.rate}<IoStar /><p>({item.rating.count})</p></p>
                          </div>
                          <div className='product-item-info'>  
                            <p className='product-item-info-title'>{item.title}</p>
                            <p className='product-item-info-price'>{item.price}$</p>
                          </div>
                        </div>
                      </>
                    )
                })
            }
          </Slider>
          <button className='product-container-slider-next' onClick={() => slider?.current?.slickNext()}> <FaArrowRight /></button>
        </div>
    </div>
  )
}

export default CollectionNewProducts