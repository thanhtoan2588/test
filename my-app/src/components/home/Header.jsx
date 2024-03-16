import React from 'react'
import logoHeader from '../../assets/img/logoHeader.png'
import '../../styles/home/header.css'
import '../../styles/home/reponsive.css'

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

import { Link } from 'react-router-dom'; 

function Header() {
  return (
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
            <div className='header-actionUser-button'>
              <Link to="/register"><FaUser /></Link>
              <FaBagShopping />
            </div>
        </div>
    </div>
  )
}

export default Header