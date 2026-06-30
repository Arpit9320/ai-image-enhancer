import { useContext } from 'react'
import FunctionBtns from './FunctionBtns'
import { ImageSrc } from './Context/Image'

const ActionBtn = () => {

  const {setPreviewimg, setFile} = useContext(ImageSrc)

  const imagePreview = (dets)=>{
    if(dets.target.files[0]){

      const selectedFile = dets.target.files[0]
  
      setFile(selectedFile)
  
      const url = URL.createObjectURL(selectedFile)
  
      setPreviewimg(url)

    }
  }

  return (
      <div className="actionBtn lg:mt-[2vw] mt-[8vw]">

        <label htmlFor="uploadInput" className="bg-white lg:h-[4vw] lg:w-[30vw] h-[12vw] w-[75vw] rounded-xl cursor-pointer flex justify-center items-center shadow-black shadow-md">
            <h3 className="text-black border-dashed border-2 border-gray-400 lg:px-20 lg:py-2 px-3 py-0.5 rounded-md">Click to Upload your Image</h3>
            <input type="file" id="uploadInput" accept="image/*" hidden onChange={imagePreview}/>
        </label>

        <FunctionBtns/>
        
        
      </div>
  )
}

export default ActionBtn
