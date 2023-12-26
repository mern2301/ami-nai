import React from 'react'

const Services = () => {
  return (
    <div className = ' grid grid-cols-2 pt-[28px]'>
        <div className = ' pl-[390px] pt-[106px]'>
            <div className = ''>
                <h3 className = 'leading-normal font-poppins text-[64px] font-bold'>Our Services</h3>
                <p className = 'font-poppins text-base font-medium w-[405px] text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        

        <div style = {{background:'url(./Services1.png)' , padding:'147px 0 139px 116px', backgroundRepeat:'no-repeat', backgroundposition: 'center' , backgroundSize:'cover'}} className = '  pt-7 hover:after:absolute hover:after:top-0 hover:after:left-0 relative hover:after:bg-overlay hover:after:w-full hover:after:h-full hover:after:z-[-1] z-[1] hover:after:content-[""] hover:after:transition ease-in-out delay-1000'>
            <div className = "gap-y-8">
                <h3 className = 'font-poppins text-4xl text-white font-bold mb-[19px] leading-normal'>Modern natural oil and gas refineries.</h3>
                <p><a href="" className = "font-poppins text-white bg-praimary gap-y-8 py-[13px] px-[30px] font-semibold text-base">Learn More</a></p>
            </div>


        </div>
        <div style = {{background:'url(./Services2.png)' , padding:'147px 0 139px 116px', backgroundRepeat:'no-repeat', backgroundposition: 'center' , backgroundSize:'cover'}} className = '  pt-7 after:absolute after:top-0 after:left-0 relative after:bg-overlay after:w-full after:h-full after:z-[-1] z-[1] after:content-[""]'>
            <div className = "gap-y-8">
                <h3 className = ' leading-normal font-poppins text-4xl text-white font-bold mb-[19px]'>Supply of national industries.</h3>
                <p><a href="" className = "font-poppins text-white bg-praimary gap-y-8 py-[13px] px-[30px] font-semibold text-base">Learn More</a></p>
            </div>


        </div>
        <div style = {{background:'url(./Services3.png)' , padding:'147px 0 139px 116px', backgroundRepeat:'no-repeat', backgroundposition: 'center' , backgroundSize:'cover'}} className = '  pt-7 after:absolute after:top-0 after:left-0 relative after:bg-overlay after:w-full after:h-full after:z-[-1] z-[1] after:content-[""]'>
            <div className = "gap-y-8">
                <h3 className = 'leading-normal font-poppins text-4xl text-white font-bold mb-[19px]'>National fuel distribution and supply.</h3>
                <p><a href="" className = "font-poppins text-white bg-praimary gap-y-8 py-[13px] px-[30px] font-semibold text-base">Learn More</a></p>
            </div>

        </div>
        
    </div>
  )
}

export default Services