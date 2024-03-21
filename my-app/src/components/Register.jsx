import React, { useState } from 'react'
import '../styles/register.css'

import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup' 
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useForm } from "react-hook-form"

const urlApi = "https://656708c964fcff8d730f9b4b.mockapi.io/api/login/users"

const registerSchema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
});

function Register() {

  const navigate = useNavigate()
  
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
      // localStorage.setItem("dataRegister", JSON.stringify(dataRegister))
      // theo em nghỉ khi mình lưu data.data vào localStorage thì nó có đảm bảo dữ liệu mới nhất 
      // khi cập nhật và không bị mất còn khi em test lưu vào dataRegister thì dữ liệu trong localStogare
      // không được đẩm bảo và bị rỗng
      }
    )
    postUser.catch(
      (error) => console.log(error)
    )
  
    reset()

    toast.success("Đăng ký thành công", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    
   setTimeout(() => {
    navigate("/login")
   }, 2500);

  }

  return (
    <>
        <div class="register-container">
          <div>
            <div class="title-container">
              <h1>CIT EDU SHOP</h1>
              <p>Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền
                  cho bất kỳ đơn hàng nào.</p>
              <button><a onClick={() => navigate("/login")} >Login</a></button>
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
              <span>{errors.name?.message}</span>
              <input type="email" placeholder="Email" {...register("email")}/>
              <span>{errors.email?.message}</span>
              <input type="password" placeholder="Password" {...register("password")}/>
              <span>{errors.password?.message}</span>
              {/* <p>ALREADY HAVE AN ACCOUNT ? <a>lOGIN NOW</a></p> */}
              <button>Register</button>
            </form>
          </div>
          </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Register