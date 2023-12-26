import React from 'react'
import map from '../../assets/Maps.png'


const Map = () => {
  return (
<div>
    <div>
        <img src={map} alt="map" />
    </div>
    <div className = 'py-[47px] bg-praimary border-b-4 border-[#FFB800]'>
        <div className = 'max-w-container mx-auto flex justify-between'>
            <h5 className = 'text-4xl font-bold font-poppins text-white'>Want to join as member branch in your area?</h5>
            <p><a href="" className = 'py-[13px] px-[32px] border-2 text-base font-semibold text-white cursor-pointer'>CONTACT</a></p>
        </div>
    </div>
</div>
  )
}

export default Map