import React from 'react'
import image1 from '../../assets/supplier-1.png'
import image2 from '../../assets/supplier-2.png'
import image3 from '../../assets/supplier-3.png'
import image4 from '../../assets/supplier-4.png'

const Supplier = () => {
  return (
    <div >
        <div className = " flex pt-[78px] pb-[100px] max-w-container mx-auto gap-x-44 items-center">
            <h2 className = "w-[289px] font-poppins text-5xl font-bold leading-[72px]"> The biggest supplier on the country </h2>
            <p className = "text-base font-medium w-[651px] font-poppins text-secondary leading-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
        <div className = "flex justify-between w-full">
            <img src={image1} alt="image" />
            <img src={image2} alt="image" />
            <img src={image3} alt="image" />
            <img src={image4} alt="image" />
        </div>
    </div>
  )
}

export default Supplier