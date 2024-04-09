import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../styles/home/productMore.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ProductMore() {

    const [arrangeIncrease, setArrangeIncrease] = useState(false)
    const [arrangeReduce, setArrangeReduce] = useState(false)
    const [limit, setLimit] = useState(4)
    const [buttonMore, setButtonMore]=useState(false)
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((data) => setData(data.data))
        .catch((err) => {console.log(err)})
    },[limit])

    useEffect(() =>{
        if(arrangeReduce === false && arrangeIncrease === false){
        axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((data) => setData(data.data))
        .catch((err) => {console.log(err)})
        }
    },[arrangeIncrease,arrangeReduce])

    // const handleMoreProduct = () => {
    //     axios.get("https://fakestoreapi.com/products?limit=10")
    //     .then((data) => setData(data.data))
    //     .catch((err) => {console.log(err)})
    // }

    const handleSortIncrease = () => {
        const newData = [...data]
        setData(newData.sort((a,b) => a.price - b.price))
        setArrangeIncrease(!arrangeIncrease)
        if(arrangeReduce){
            setArrangeReduce(false)
        }else{
            setArrangeReduce(false)
        }
    }

    const handleSortReduce = () => {
        const newData = [...data]
        setData(newData.sort((a,b) => b.price - a.price))
        setArrangeReduce(!arrangeReduce)
        if(arrangeIncrease){
            setArrangeIncrease(false)
        }else{
            setArrangeIncrease(false)
        }

        if(arrangeReduce === false && arrangeIncrease === false){
        }
    }

    const handleButtonMore = () => {
        setButtonMore(!buttonMore)
        if (buttonMore){
            setLimit(4);
        }else{
            setLimit(10);
        }
    }

  return (
    <>
        <div data-aos="zoom-in-up" className='banner-ProductMore'>
            <img src="https://mcdn.coolmate.me/image/March2024/mceclip0_24.png" alt="banner-productMore" />
        </div>
        
        <div data-aos="zoom-in-up" className='container-productMore'>
            <div className='container-productMore-btn'>
                <div className='container-productMore-btn-arrange'>
                    <button onClick={() => {handleSortIncrease()}} style={{background: arrangeIncrease ? "#000" : "#ffffff",color: arrangeIncrease ? "#ffffff" : "#000" }}>tăng dần</button>
                    <button onClick={() => {handleSortReduce()}} style={{background: arrangeReduce ? "#000" : "#ffffff", color: arrangeReduce ? "#ffffff" : "#000"}}>giảm dần</button>
                </div>
                <button onClick={() => {handleButtonMore()}} style={{
                            background: buttonMore ? "#000" : "#fff",
                            color: buttonMore ? "#fff" : "#000"
                            }}>{buttonMore ? "Thu gọn" : "Xem Thêm" }</button>
            </div>
            <div className='container-productMore-item'>
                <>
                {
                    data?.map((item) => {
                        return (
                            <>
                                <div className='container-productMore-item-info'>
                                    <div className='image'>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className='container-productMore-item-content'>
                                        <p className='content-title'>{item.title}</p>
                                        <p className='content-price'>{item.price}$</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
            </div>
        </div>
    </>
  )
}

export default ProductMore