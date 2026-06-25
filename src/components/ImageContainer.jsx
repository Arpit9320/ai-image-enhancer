import React from 'react'
import Original from './Original'
import Enhanced from './Enhanced'

const ImageContainer = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-6 lg:mt-[5vw] mt-[9vw]">

      <div className="original bg-white lg:h-[15vw] lg:w-[20vw] h-[30vh] w-[40vh] flex flex-col rounded-xl  shadow-black shadow-2xl">
        <h4 className="text-black text-center bg-blue-950 font-semibold pb-0.5 rounded-t-lg">Original Image</h4>
        <Original/>
      </div>
      
      <div className="enhanced bg-white lg:h-[15vw] lg:w-[20vw] h-[30vh] w-[40vh] flex flex-col rounded-xl shadow-black shadow-2xl">
        <h4 className="text-black text-center bg-blue-800 font-semibold pb-0.5 rounded-t-lg ">Enhanced Image</h4>
        <Enhanced/>
      </div>

    </div>
  )
}

export default ImageContainer
