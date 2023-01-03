import { useState } from "react"

export default function Sidebar(props) {

    const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <>
    <div className="absolute flex flex-row">
        <div className={`h-[100vh] relative overflow-hidden duration-[0.5s] ${sidebarToggle ? "w-[200px]" : "w-0"}  bg-white`}>
            <div className='w-full flex flex-col px-[10px] text-center items-center'>
                <div className="h-[60px] w-[60px] my-[12px] text-white bg-black rounded-[90px] font-bold justify-center flex items-center">Fontu</div>
                <div className="flex flex-col my-[25px] w-full justify-center">
                    <div className=' text-[#3d3d3d] font-semibold hover:text-black mb-[10px] cursor-pointer'>Home</div>
                    <div className=' text-[#3d3d3d] font-semibold hover:text-black mb-[10px] cursor-pointer'>App</div>
                    <div className=' text-[#3d3d3d] font-semibold hover:text-black mb-[10px] cursor-pointer'>Pricing</div>
                    <div className=' text-[#3d3d3d] font-semibold hover:text-black mb-[10px] cursor-pointer'>Partner</div>
                    <div className=' text-[#3d3d3d] font-semibold hover:text-black mb-[10px] cursor-pointer'>AboutUs</div>
                </div>
                <button className='h-[40px] w-[100px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
            </div>
        </div>
        <div className="relative cursor-pointer m-[20px] h-[20px] block md:hidden" onClick={() => {setSidebarToggle(!sidebarToggle)}}>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
        </div>
    </div>
        
    </>
  )
}
