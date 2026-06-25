import ImageCard from "./ImageCard"


const ImageContainer = () => {


  

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-full max-w-xl w-[85%] justify-center lg:mr-0 mr-5'>

      {/* original image */}

      <ImageCard heading = {'Original Image'} status = {'No Image Selected'}/>

      {/* Enhanced image */}
      
      <ImageCard heading = {'Enhanced Image'} status = {'Select Image to Enhance'}/>

    </div>
  )
}

export default ImageContainer
