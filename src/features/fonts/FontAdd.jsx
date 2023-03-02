import React from 'react'
import { ReactComponent as AddIcon} from "../../assets/images/Add-Icon.svg"

export default function FontAdd() {

  const visibility = "visible"

  return (
    <div className="w-full flex justify-center items-center p-[80px] bg-[#f8f3ff]">
        <div className="w-full flex justify-center items-center flex-col">
          {visibility == "visible" ? <div className="w-[80%] h-[380px] border-solid border-[3px] border-[#e2cdff] cursor-pointer rounded-[20px] flex flex-col justify-center items-center">
            <div className="w-full p-[20px] flex flex-col justify-center items-center">
                <AddIcon alt="" width="200" className='fill-transparent stroke-[#e2cdff] mb-[30px]'/>
                <h1 className='text-purple-900 font-bold'>Click to Upload or Drag and Drop</h1>
            </div>
        </div> : ""}
        <div className="w-[80%] flex justify-end">
          <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mt-[20px]'>Add Fonts</button>
        </div>
        </div>
    </div>
  )
}
