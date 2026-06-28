import ActionBtn from "./components/ActionBtn"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ImageContainer from "./components/ImageContainer"




const App = () => {
  return (
    <div className="main min-h-screen w-full bg-[rgb(235,235,235)]  font-sans flex flex-col justify-start items-center  pt-4 ">
      <Header/>

      <ActionBtn/>

      <ImageContainer/>

      <Footer/>

    </div>

  )
}

export default App
