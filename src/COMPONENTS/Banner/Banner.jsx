import React from 'react'

const Banner = () => {
  return (
    <div>
       <div className = " relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#00000099] after:z-[-1] z-[1] after:h-full after:w-full" style = {{background:'url(./banner.png)' , padding:'258px 0' , backgroundRepeat:'no-repeat' ,backgroundSize:'cover' ,backgroundPosition:'center'}}>

            <div className = "max-w-container mx-auto px-[10px] md:px-0">
                  <h1 className = " text-[64px] font-bold text-white w-[842px] font-poppins">We exist since 1975 on the oil and gas industry.</h1>
                  <button className = "font-poppins text-white bg-[#F40404] mt-8 py-[13px] px-[41px]  font-semibold text-base"> LEARN MORE</button>
            </div>
    </div>
    </div>
  )
}

export default Banner