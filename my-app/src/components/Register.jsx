import React, { useState } from 'react'
import '../styles/register.css'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup' 

import axios from 'axios';
import { useForm } from "react-hook-form"

const urlApi = "https://656708c964fcff8d730f9b4b.mockapi.io/api/login/users"

const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});

function Register() {
  
  const [ dataRegister , setDataRegister ] = useState({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm ({
    mode: 'onChange',
    resolver: yupResolver(registerSchema)
  })

  const handleRegister = (data) => {
    console.log(data);

    const postUser = axios.post(urlApi, data)
 
    postUser.then(
      (data) => {setDataRegister(data.data);
      localStorage.setItem("dataRegister", JSON.stringify(data.data))

      alert("đăng ký thành công")
      }
    )
    postUser.catch(
      (error) => console.log(error)
    )

    reset()

  }

  return (
    <div class="register-container">
      <div>
        <div class="title-container">
          <h1>CIT EDU SHOP</h1>
          <p>Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền
              cho bất kỳ đơn hàng nào.</p>
          <button><a href="./login.html">Login</a></button>
        </div>

      <div class="form-container">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social"><FaFacebook /></a>
            <a href="#" class="social"><FaGooglePlus /></a>
            <a href="#" class="social"><FaLinkedin /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" {...register("name")}/>
          <p>{errors.email?.name}</p>
          <input type="email" placeholder="Email" {...register("email")}/>
          <p>{errors.email?.message}</p>
          <input type="password" placeholder="Password" {...register("password")}/>
          <p>{errors.password?.message}</p>
          <p>ALREADY HAVE AN ACCOUNT ? <a href="./login.html">lOGIN NOW</a></p>
          <button>Register</button>
        </form>
      </div>
      </div>
  </div>
  )
}

export default Register