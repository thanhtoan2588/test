// import React, { useState } from 'react'
// import axios from 'axios'
// import '../../styles/product.css'

// const api = "https://fakestoreapi.com/products"

// function Product() {
//     const [ data, setData ] = useState([])

//     const apiProduct = axios.get(api)
//     apiProduct.then((data) => setData(data.data))
//     apiProduct.catch((error) => console.log(error))

//   return (
//     <div className='product-container'>
//       {data?.map((item) =>{
//         return(
//           <div key={item.id} className='product-container-info'>
//             <img src={item.image} alt="imageProduct" />
//           </div>
//         )
//     })}
//     </div>
//   )
// }

// export default Product