import { useState } from "react"
import { Link } from "react-router-dom"
import fontasie from "../assets/images/fontasie.svg"
import { useSelector } from "react-redux"
import { allTemplates } from "../features/templates/templateSlice"

export default function Sidebar(props) {


    const templates = useSelector(allTemplates)

    const [sidebarToggle, setSidebarToggle] = useState(false)

    return (
        <>
            <div className="absolute flex flex-row z-[4]">
                <div className={`h-[100vh] relative overflow-hidden duration-[0.5s] ${sidebarToggle ? "w-[200px]" : "w-0"}  bg-white`}>
                    <div className='w-full flex flex-col px-[10px] text-center items-center'>
                        <Link to="/">
                            <div className="flex flex-col justify-center items-center"
                             onClick={()=> {
                                setSidebarToggle(false)
                            }}
                            >
                                <img src={fontasie} alt="" className="w-[22px] h-[70px] object-contain" />
                                <p className=" mx-[12px] text-black font-bold">Fontasie</p>

                            </div>
                        </Link>
                        <div className="flex flex-col my-[25px] w-full justify-center">
                            <Link to="/">
                                <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'
                                    onClick={() => {
                                        setSidebarToggle(false)
                                    }}
                                >Home</div>
                            </Link>

                            <Link to="/about">
                                <div className='text-[#575757] font-medium hover:text-black mb-[10px] cursor-pointer'
                                    onClick={() => {
                                        setSidebarToggle(false)
                                    }}
                                >AboutUs</div>
                            </Link>

                        </div>
                        <Link to={`/fontlab/${0}`} state={templates[0]}>
                            <button className='h-[40px] w-[100px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'
                                onClick={() => {
                                    setSidebarToggle(false)
                                }}
                            >Try Demo</button>
                        </Link>
                    </div>
                </div>
                <div className="relative cursor-pointer mt-[37px] mx-[20px] mb-[20px] h-[20px] block md:hidden" onClick={() => { setSidebarToggle(!sidebarToggle) }}>
                    <div className={`h-[2px] w-[20px] ${sidebarToggle ? "bg-white" : "bg-black"} duration-300 mb-[5px]`}></div>
                    <div className={`h-[2px] w-[20px] ${sidebarToggle ? "bg-white" : "bg-black"} duration-300 mb-[5px]`}></div>
                    <div className={`h-[2px] w-[20px] ${sidebarToggle ? "bg-white" : "bg-black"} duration-300 mb-[5px]`}></div>
                </div>
            </div>


            <div className={`h-[100vh] w-[100%] absolute duration-300 bg-black ${sidebarToggle ? "opacity-50 z-[3]" : "opacity-0 z-[-1]"} `}
                onClick={() => {
                    setSidebarToggle(false)
                }}
            ></div>

        </>
    )
}
