import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../styles/productDetails.css"
import Header from './home/Header'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

function ProductDetails(id) {
    const [data, setData] = useState({})
    
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${id.id}`)
        .then((data) => {
            setData(data.data)
        })
        .catch()
    },[])

    useEffect(() =>{
      const star = [];
      // for(let i=0;i< data?.rating.rate;i++) {
      // star.push(<FaStar/>);
      // }
      console.log(data?.rating?.rate);
    },[])

  return (
    <>
      <Header/>
      
      <div className='container-productDetails'>
        <div className='container-productDetails-link'>
            <Link>Trang chủ</Link> <p>/</p> <Link>{data?.category}</Link>
        </div>

        <div className='container-productDetails-content'>
            <div className='container-productDetails-content-slideImg'>
                <img src={data?.image} alt={data?.title} />
            </div>
            <div className='container-productDetails-content-mainImg'>
                <img src={data?.image} alt={data?.title} />
            </div>
            <div className='container-productDetails-content-summary'>
                <div className='container-productDetails-content-summary-info'>
                  <h1>{data?.title}</h1>
                  <p>{data?.rating?.rate}</p>
                  <p>{data?.price}$</p>
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default ProductDetails