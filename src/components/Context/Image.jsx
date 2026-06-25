import React, { useState } from 'react'
import { createContext } from 'react'

export const ImageSrc = createContext()

const Image = (props) => {

    const[Previewimg, setPreviewimg] = useState(null)

    const [file, setFile] = useState(null)
    
    const [Enhancedimg, setEnhancedimg] = useState(null)

  return (
    <div>
      
        <ImageSrc.Provider value={[Previewimg, setPreviewimg, file, setFile,Enhancedimg, setEnhancedimg]}>
            {props.children}
        </ImageSrc.Provider>

    </div>
  
)
}


export default Image
