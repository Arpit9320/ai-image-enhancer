import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Image from './components/Context/Image.jsx'

createRoot(document.getElementById('root')).render(

    <Image>

        <App />

    </Image>   
)
