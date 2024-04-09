import React from 'react'
import "../../styles/home/buttonEmail.css"
import { FaMessage } from "react-icons/fa6";

function ButtonEmail() {

  return (
    <button className='submitButton' onClick={() => window.open("/emailSendingForm")} ></button>
  )
}

export default ButtonEmail