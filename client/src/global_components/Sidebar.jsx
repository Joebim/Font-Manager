import { useState } from "react"
import { Link } from "react-router-dom"

export default function Sidebar(props) {

    const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <>
    <div className="absolute flex flex-row">
        <div className={`h-[100vh] relative overflow-hidden duration-[0.5s] ${sidebarToggle ? "w-[200px]" : "w-0"}  bg-white`}>
            <div className='w-full flex flex-col px-[10px] text-center items-center'>
                <Link to="/">
                    <div className="h-[40px] w-[1000px] my-[12px] text-white bg-purple-900 rounded-[90px] font-bold justify-center flex items-center">Fontasie</div>
                </Link>
                <div className="flex flex-col my-[25px] w-full justify-center">
                    <Link to ="/">
                        <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>Home</div>
                    </Link>
                    <Link to ="/app">
                        <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>App</div>
                    </Link>
                    <Link to="/pricing">
                        <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>Pricing</div>
                    </Link>
                    <Link to="/partner">
                        <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>Partner</div>
                    </Link>
                    <Link to="/about">
                        <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>AboutUs</div>
                    </Link>

                </div>
                <button className='h-[40px] w-[100px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
            </div>
        </div>
        <div className="relative cursor-pointer mt-[37px] mx-[20px] mb-[20px] h-[20px] block md:hidden" onClick={() => {setSidebarToggle(!sidebarToggle)}}>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
            <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
        </div>
    </div>
        
    </>
  )
}
