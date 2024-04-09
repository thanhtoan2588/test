import React from 'react'
import emailjs from '@emailjs/browser';
import "../styles/emailSendingForm.css"

import { FaArrowRightLong } from "react-icons/fa6";

import { useForm } from "react-hook-form"

function EmailSendingForm() {

  const {register,handleSubmit} = useForm()
        
  const handleFormEmail = (data) => {

    const dataEmail = {
    name : data.name,
    phone: data.phone,
    message: data.message,
  }

  console.log(data);
  
    emailjs.send('service_8vpf0bs', 'template_u5g4l6s', dataEmail , {publicKey: 'G8yo0Xa98ydZ6xwlf',})
    .then((result) => {
        console.log('SUCCESS!',result.text);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return (
    <div className='container-email'>
      <div className='container-email-options'>
        <h3>Thư viện và hỏi đáp</h3>
        <a >Có thể Bạn Quan Tâm <FaArrowRightLong /></a>
        <a >Mua Hàng <FaArrowRightLong /></a>
        <a >Thông tin đơn hàng <FaArrowRightLong /></a>
        <a >Đổi trả hàng <FaArrowRightLong /></a>
        <a >Đánh giá <FaArrowRightLong /></a>
      </div>
      <div className='container-email-form'>
        <form >
          <div className='container-email-form-main'>
            <label>Họ tên</label>
            <input type="text" placeholder='Nhập họ tên...' name='name' {...register("name")} />
            <label>Số điện thoại</label>
            <input type="number" placeholder='Số điện thoại của bạn' name='phone' {...register("phone")}/>
            <label>Yêu cầu của quý khách</label>
            <input type="text" placeholder='Nhập yêu cầu bạn muốn tư vấn' name='message' {...register("message")} />
          </div>
          <div className='container-email-form-button'>
            <button onClick={handleSubmit(handleFormEmail)}>Hẹn lịch</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailSendingForm