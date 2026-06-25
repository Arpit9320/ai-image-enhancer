import ImageCard from "./ImageCard"
import { ImageSrc } from './Context/Image'
import { useContext} from 'react'


const ImageContainer = () => {


  const {Previewimg, setPreviewimg, loader, Enhancedimg} = useContext(ImageSrc)
  

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-full max-w-xl w-[85%] justify-center lg:mr-0 mr-5'>

      {/* original image */}

      <ImageCard heading = {'Original Image'} status = {'No Image Selected'} src={Previewimg} bg={'bg-gray-800'}/>

      {/* Enhanced image */}
      
      <ImageCard heading = {'Enhanced Image'} status = {'Select Image to Enhance'} showloader={loader} src={Enhancedimg} bg={'bg-blue-800'}/>

    </div>
  )
}

export default ImageContainer
