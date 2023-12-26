import React from 'react'
import logo1 from '../../assets/Logo1.png'
import logo2 from '../../assets/Logo2.png'
import logo3 from '../../assets/Logo3.png'
import logo4 from '../../assets/Logo4.png'

const Logo = () => {
  return (
    <div className = 'max-w-container mx-auto flex py-[117px]'>
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />

    </div>
  )
}

export default Logo