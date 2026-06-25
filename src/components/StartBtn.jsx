import { useContext, useEffect} from "react"
import { ImageSrc } from "./Context/Image"


const StartBtn = () => {

  const {Previewimg, file, loader, setLoader, setEnhancedimg} = useContext(ImageSrc)

  
  const startEnhancing = ()=>{
    setLoader(true)

    setTimeout(() => {
        setEnhancedimg(Previewimg)
        setLoader(false)
    }, 2000)
  }
  const isDisabled = !file || loader;

  return (
    <>
      <button className={`text-black  border-none outline-none px-3 lg:text-[1.1vw] text-[3vw] font-medium  transition-all ease rounded-md py-2 
      ${isDisabled? "cursor-not-allowed bg-green-900"
      : "cursor-pointer bg-green-600 hover:bg-green-700"}`} disabled={isDisabled} onClick={startEnhancing}>{loader ? "Enhancing..." : "Start Enhancing"}</button>
    </>
  )
}

export default StartBtn
