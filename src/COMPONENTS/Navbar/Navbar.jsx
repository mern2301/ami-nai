import React, { useState } from 'react'
import logo from "../../assets/NavLogo.png"
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const click = ()=>{
    setShow(!show)
  }
  return (
    <div className = "bg-praimary py-[30px]">
        <div className = "max-w-container mx-auto px-[10px] md:px-0 ">
            <div className = "flex justify-between">
              <div className = "w-1/5">
                <img src={logo} alt="logo" />
              </div>
                <div className = 'flex justify-end'>
                <div onClick = {click} className = "md:hidden text-white text-2xl">
                {
                  show == true ? <RxCross2/> : <AiOutlineBars/>
                }
              </div>
                <div className = "w-4/5">
                    <ul className = {`md:flex justify-end poppins gap-[47px] md:static absolute left-0 top-[-200px]   ${show == true ? 'top-[196px] bg-blue-600 py-[20px] md:bg-praimary pe-[100px]' : 'top-[-200px] bg-blue-600 py-[20px] md:bg-praimary pe-[100px'}`}>
                        <li><a href="" className = "text-base font-semibold font-poppins text-white">Home</a></li>
                        <li><a href="" className = "text-base font-semibold font-poppins text-white">About</a></li>
                        <li><a href="" className = "text-base font-semibold font-poppins text-white">Services</a></li>
                        <li><a href="" className = "text-base font-semibold font-poppins text-white">Gallery</a></li>
                        <li><a href="" className = "text-base font-semibold font-poppins text-white">Blog</a></li>
                        <li><a href="" className = "text-base font-semibold font-poppins md:text-white md:border-2 md:px-[30px] md:py-[14px] text-black ">CONTACT</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar