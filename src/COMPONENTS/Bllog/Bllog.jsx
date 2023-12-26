import React from 'react'


const Bllog = () => {
  return (
    <div className = 'py-[110px] bg-[#F0F0F0] '>
        <div className = 'flex mx-auto max-w-container justify-between'>
            <div style = {{background:'url(./bllog1.png)', backgroundRepeat:'no-repeat',  padding:'75px 46px 55px 46px', backgroundPosition:'center',}} className=' hover:after:absolute hover:after:top-0 hover:after:left-0 relative hover:after:bg-overlay hover:after:w-full  hover:after:h-full hover:after:z-[-1] z-[1] hover:after:content-[""]'> 

            <p className = 'font-bold font-poppins text-2xl text-white w-[250px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

            <p><a href="" className = 'py-[10px] px-[22px] bg-[#FFFFFF80] text-white font-poppins font-semibold text-xs'>Read more</a></p>
            </div>

           
            <div style = {{background:'url(./bllog2.png)', backgroundRepeat:'no-repeat',  padding:'75px 46px 55px 46px', backgroundPosition:'center',}} className=' hover:after:absolute hover:after:top-0 hover:after:left-0 relative hover:after:bg-overlay hover:after:w-full  hover:after:h-full hover:after:z-[-1] z-[1] hover:after:content-[""]'> 

            <p className = 'font-bold font-poppins text-2xl text-white w-[250px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

            <p><a href="" className = 'py-[10px] px-[22px] bg-[#FFFFFF80] text-white font-poppins font-semibold text-xs'>Read more</a></p>
            </div>

           
            <div style = {{background:'url(./bllog3.png)', backgroundRepeat:'no-repeat',  padding:'75px 46px 55px 46px', backgroundPosition:'center',}} className=' hover:after:absolute hover:after:top-0 hover:after:left-0 relative hover:after:bg-overlay hover:after:w-full  hover:after:h-full hover:after:z-[-1] z-[1] hover:after:content-[""]'> 

            <p className = 'font-bold font-poppins text-2xl text-white w-[250px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

            <p><a href="" className = 'py-[10px] px-[22px] bg-[#FFFFFF80] text-white font-poppins font-semibold text-xs'>Read more</a></p>
            </div>
           
        </div>
            <div className = 'max-w-container mx-auto flex justify-end mt-[28px] font-poppins text-base font-bold cursor-pointer'>
                <p>MORE FROM THE BLLOG</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black"/>
              </svg>
            </div>

    </div>
  )
}

export default Bllog