import { useContext } from "react"
import { ImageSrc } from "./Context/Image"


const ExportBtn = () => {
  const {Enhancedimg, loader, file} =  useContext(ImageSrc)

  const isDisabled = !Enhancedimg || loader

  const downloadimg = ()=>{
    if (!Enhancedimg) return;

    const link = document.createElement("a")
    link.href = Enhancedimg
    const filename = file?`${file.name.split(".")[0]}-enhanced.png`: "Enhanced-image.png"

    link.download = filename
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <button className="text-black bg-yellow-600 border-none outline-none px-6 lg:text-[1.1vw] text-[3vw] font-medium hover:bg-yellow-700 transition-all ease cursor-not-allowed rounded-md py-2" disabled={isDisabled} onClick={downloadimg}>Download</button>
    </>
  )
}

export default ExportBtn