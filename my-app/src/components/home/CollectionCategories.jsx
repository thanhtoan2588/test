import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../../styles/home/reponsive.css"
import "../../styles/home/collectionCategories.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const APISpecific = "https://fakestoreapi.com/products/categories"

const APIGetProductsSpecific = "https://fakestoreapi.com/products/category"


function CollectionCategories({setId}) {

    const navigate = useNavigate()

    const [productAppears, setProductAppears] = useState(4)
    const [buttonMore, setButtonMore] = useState(false)
    const [buttonCategory, setButtonCategory] = useState("electronics")
    const [specific,setSpecific] = useState([])
    const [dataProductsSpecific, setDataProductsSpecific] = useState([])

    useEffect(() => {
        const fetchApiSpecific = axios.get(APISpecific)

        fetchApiSpecific.then((data) => {
            setSpecific(data.data)
        })

        fetchApiSpecific.catch((error) => {
            console.log(error);
        });

    }, [])

    useEffect(() => {
        const HandleGetProductsSpecific = axios.get("https://fakestoreapi.com/products/category/electronics")

        HandleGetProductsSpecific.then((data) => {
            setDataProductsSpecific(data.data)
        })
    },[])

    const handleChangeData = (param) => {

        const newParam = param.split(" ").join("%20")

        const HandleGetProductsSpecific = axios.get(`${APIGetProductsSpecific}/${newParam}`)

        HandleGetProductsSpecific.then((data) => {
            setDataProductsSpecific(data.data)
        })
    }

    const handleGetProductsDetails = (idProduct) => {
        setId(idProduct)
        navigate(`/products/${idProduct}`)
    }

    const handleButtonMore = () => {
        setButtonMore(!buttonMore)
        if(buttonMore) {
            setProductAppears(4)
        }
        else{
            setProductAppears(dataProductsSpecific.length)
        }
    }

  return (
    <>
        <div data-aos="zoom-in-up" className='banner-Categories'>
            <img src="https://media2.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2024/mceclip8_45.png" alt="banner-Categories" />
            <div className='banner-Categories-content'>
                <h1>Sản phẩm bứt phá</h1>
                <p>Trải nghiệm chưa từng có trong mỗi sản phẩm</p>
                <button>Khám phá ngay</button>
            </div>
        </div>
        <div data-aos="zoom-in-up" className='container-Categories'>
            <div className='container-Categories-btnCategories'>
                <div className='container-Categories-btnCategories-item'>
                    {
                        specific.map(item => {
                            return (
                                <button style={{background: buttonCategory === item ? "black" : "#ffffff",
                                                color: buttonCategory === item ? "#ffffff" : "#000"}}
                                
                                onClick={() => {handleChangeData(item) ; setButtonCategory(item);}}>{item}</button>
                            )
                        })
                    }
                </div>

                <button onClick={ () => {handleButtonMore();}}
                        style={{background: buttonMore ? "black" : "#ffffff",
                        color: buttonMore ? "#ffffff" : "#000"}}
                >{buttonMore ? "Thu Gọn" : "Xem Thêm"}</button>

            </div>

            

            <div className='container-Categories-product'>
                <>
                {
                    dataProductsSpecific.slice(0,productAppears).map(item => {
                        return (
                            <>
                                <div className='container-Categories-product-info' onClick={() => handleGetProductsDetails(item.id)} key={item.id}>
                                    <div className='image'>
                                        <img className='background' src={item.image} alt={item.title} />
                                    </div>
                                    <div className='content'>
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

export default CollectionCategories