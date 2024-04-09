import React, { useEffect, useState } from 'react'
import logoHeader from '../../assets/img/logoHeader.png'
import '../../styles/home/header.css'
import '../../styles/home/reponsive.css'
import Headroom from 'react-headroom'

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

import { Link, useNavigate } from 'react-router-dom'; 

function Header() {

  const navigate = useNavigate()

  const [username , setUsername] = useState("")
  const [showDropDown , setShowDropDowm] = useState(false)

  const dataRegister = JSON.parse(localStorage.getItem("dataRegister"))

  const handleDropDown = () => {

    setShowDropDowm(!showDropDown)

  }

  const handleLogOut = () => {
    localStorage.removeItem("dataRegister")
    navigate("/register")
  }

  useEffect(() => {
    setUsername(dataRegister?.name)
  },[])

  return (
    <Headroom>
      <div className='header-container'>
          <div className='header-menu-search'>
            <IoMenu />
            <CiSearch />
          </div>
          <img className='header-logo' src={logoHeader} alt="logoHeader" />
          <ul className='header-nav-links'>
              <li>SALE</li>
              <li>SẢN PHẨM</li>
              <li>ĐỒ LÓT</li>
              <li>ĐỒ THỂ THAO</li>
              <li>MẶC HẰNG NGÀY</li>
              <li>NƯỚC HOA</li>
              <li>SẢN XUẤT RIÊNG</li>
              <li>CARE&SHARE</li>
          </ul>
          <div className='header-actionUser'>
              <div className='header-actionUser-search'>
                  <CiSearch />
                  <input type="text" placeholder='Tìm kiếm sản phẩm...' />
              </div>

              {
                username === "" || username == null ? <Link to="/register"><FaUser className='header-actionUser-userIcon' /></Link> :
                <div className='header-actionUser-content'>

                  {username}
                  
                  {
                    showDropDown ? <IoIosArrowUp onClick={handleDropDown}/> : <IoIosArrowDown onClick={handleDropDown}/>
                  }
                  
                  {
                  showDropDown ?  
                    <div className='header-actionUser-content-user'>
                      <Link className='header-actionUser-bagIcon'><FaBagShopping/> Giỏ hàng</Link>
                      <button onClick={handleLogOut}><IoLogOutOutline /> Log out</button>
                    </div> : ""
                  }

                </div>
              }

              {
                username === "" || username == null ? <Link ><FaBagShopping className='header-actionUser-bagIcon-noneRegister' /> </Link> : ""
              }
                
          </div>
      </div>
    </Headroom>
  )
}

export default Header