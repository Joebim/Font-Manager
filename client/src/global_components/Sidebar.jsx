import { useState } from "react"
import { Link } from "react-router-dom"
import fontasie from "../assets/images/fontasie.svg"

export default function Sidebar(props) {

    const [sidebarToggle, setSidebarToggle] = useState(false)

    return (
        <>
            <div className="absolute flex flex-row">
                <div className={`h-[100vh] relative overflow-hidden duration-[0.5s] ${sidebarToggle ? "w-[200px]" : "w-0"}  bg-white`}>
                    <div className='w-full flex flex-col px-[10px] text-center items-center'>
                        <Link to="/">
                            <div className="flex flex-col justify-center items-center">
                                <img src={fontasie} alt="" className="w-[22px] h-[70px] object-contain" />
                                <p className=" mx-[12px] text-black font-bold">Fontasie</p>

                            </div>
                        </Link>
                        <div className="flex flex-col my-[25px] w-full justify-center">
                            <Link to="/">
                                <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'>Home</div>
                            </Link>
                            <Link to="/app">
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
                <div className="relative cursor-pointer mt-[37px] mx-[20px] mb-[20px] h-[20px] block md:hidden" onClick={() => { setSidebarToggle(!sidebarToggle) }}>
                    <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
                    <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
                    <div className="h-[2px] w-[20px] bg-black mb-[5px]"></div>
                </div>
            </div>

        </>
    )
}
