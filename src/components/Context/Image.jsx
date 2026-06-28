import { useState } from 'react'
import { createContext } from 'react'

export const ImageSrc = createContext()

const Image = (props) => {

    const[Previewimg, setPreviewimg] = useState(null)

    const [file, setFile] = useState(null)
    
    const [Enhancedimg, setEnhancedimg] = useState(null)
    
    const [loader, setLoader] = useState(false)


  return (
    <div>
      
        <ImageSrc.Provider value={{Previewimg, setPreviewimg, file, setFile, Enhancedimg, setEnhancedimg, loader, setLoader}}>
            {props.children}
        </ImageSrc.Provider>

    </div>
  
)
}


export default Image
