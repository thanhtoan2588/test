import React from 'react'
import '../styles/login.css'

import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup' 
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = yup.object({
  name: yup.string().required().min(3),
  password: yup.string().required().min(3),
});

function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm ({
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
  })

  const handleFormLogin = (data) =>{

    const dataUser = JSON.parse(localStorage.getItem("dataRegister"))

    if(data.name === dataUser.name && data.password === dataUser.password){

      toast.success("Đăng nhập thành công", {
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
        navigate("/")
      },2500)

    }else{

      toast.error("Đăng nhập thất bại", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }

  }

  return (
    <>
      <div class="login-container">
        <div>
        <div class="title-container">
          <h1>CIT EDU SHOP</h1>
          <p>Khách hàng</p>
          <button><a className='title-container-button' onClick={() => navigate("/register")}>Register</a></button>
        </div>

        <div class="form-container">
          <form onSubmit={handleSubmit(handleFormLogin)}>
            <h1>Sign In</h1>
            <div class="social-container">
                  <a href="#" class="social"><FaFacebook /></a>
                  <a href="#" class="social"><FaGooglePlus /></a>
                  <a href="#" class="social"><FaLinkedin /></a>
            </div>
            <span>or use your account </span>
            <input type="text" placeholder="Name" {...register("name")} />
            <span>{errors.name?.message}</span>
            <input type="password" placeholder="Password" {...register("password")} />
            <span>{errors.password?.message}</span>
            <a href="#">Forgot your password?</a>
            <p>
              DON'T HAVE AN ACCOUNT ? <a href="./register.html">REGISTER NOW</a>
            </p>
            <button>Login</button>
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

export default Login