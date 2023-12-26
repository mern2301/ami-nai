import React from 'react'

const Company = () => {
  return (
    <div  className = 'py-[136px] bg-[#F0F0F0]'>
        <div className = ' max-w-container mx-auto flex'>
            <div className = 'py-[100px] pr-[77px] pl-[74px] leading-normal w-[413px] font-poppins text-4xl font-bold text-white bg-praimary'>
                <h4>Learn more about our company</h4>
            </div>
            <div style = {{background:'url(./company.png', backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center', padding:'168px 282px 142px 282px'}}>
              <p><a href="" className = 'py-[14px] px-[30px] font-poppins text-base font-bold text-praimary bg-white'>Learn More</a></p>

            </div>
        </div>
    </div>
  )
}

export default Company