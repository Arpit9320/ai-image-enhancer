import { ImageSrc } from './Context/Image'
import { useContext} from 'react'

const ImageCard = ({heading, status, showloader, src, bg}) => {
    const {file} = useContext(ImageSrc)
    
  return (
      <div className='shadow-lg rounded-xl overflow-hidden lg:max-h-[24vw] lg:max-w-[15vw] max-h-full max-w-[99%] mx-auto'>
        <h2 className={`text-xl font-semibold text-center ${bg} text-white py-2`} >{heading}</h2>

        {showloader ? (
          <div className='flex items-center justify-center w-60 bg-gray-200 font-black'>
            Enhancing...
          </div>
        ) : file ? (
          <img src={src} alt="" className='object-cover' />
        ) : (
          <div className='flex items-center justify-center h-60 w-60 bg-gray-200 font-black'>
            {status}
          </div>
        )}
      
        
      </div>
  )
}

export default ImageCard
