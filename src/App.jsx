import ActionBtn from "./components/ActionBtn"
import Header from "./components/Header"
import ImageContainer from "./components/ImageContainer"



const App = () => {
  return (
    <div className="main h-screen w-full bg-[rgb(235, 235, 235)]  font-sans flex flex-col justify-start items-center lg:gap-[2vw] pt-4">
      <Header/>

      <ActionBtn/>

      <ImageContainer/>
    </div>

  )
}

export default App
