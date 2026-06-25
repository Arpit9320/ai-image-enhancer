import FunctionBtns from './FunctionBtns'

const ActionBtn = () => {
  return (
      <div className="actionBtn lg:mt-[2vw] mt-[8vw]">

        <label htmlFor="uploadInput" className="bg-white lg:h-[4vw] lg:w-[30vw] h-[12vw] w-[75vw] rounded-xl cursor-pointer flex justify-center items-center shadow-black shadow-md">
            <h3 className="text-black border-dashed border-2 border-gray-400 lg:px-20 lg:py-2 px-3 py-0.5 rounded-md">Click or Drag to Upload your Image</h3>
            <input type="file" id="uploadInput" accept="image/*" hidden/>
        </label>

        <FunctionBtns/>
        
        
      </div>
  )
}

export default ActionBtn
