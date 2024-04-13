import React from 'react'
import { Link } from 'react-router-dom'
import fontasie from "../assets/images/fontasie.svg"
import { useSelector } from 'react-redux'
import { allTemplates } from '../features/templates/templateSlice'
import { useLocation } from 'react-router-dom'


export default function Header() {
  const templates = useSelector(allTemplates)
  const location = useLocation()

console.log('location.pathname', location.pathname)

  return (
    <div className='w-full flex justify-between h-[100px] items-center pl-[70px] sm:px-[80px]'>
      <Link to="/" className='sm:block hidden'>
        <div className="flex flex-row justify-center items-center">
          <img src={fontasie} alt="" className="w-[22px] h-[70px] object-contain" />
          <p className=" mx-[12px] text-black font-medium text-[16px]">Fontasie</p>

        </div>
      </Link>
      <div className="flex flex-row items-center gap-[10%]">
        <div className="flex sm:w-[400px] w-[250px] sm:gap-[20px] justify-between">
          <Link to="/"><div className={`text-[#575757]  hover:text-black hover:font-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] duration-300 ${location.pathname == "/" ? "font-black text-black" : "font-bold"}`}>Home</div></Link>
          <Link to="/fontstore"><div className={`text-[#575757]  hover:text-black hover:font-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] duration-300 ${location.pathname == "/fontstore" ? "font-black text-black" : "font-bold"}`}>Fonts Tray</div></Link>
          <Link to="/fonttemplatestore"><div className={`text-[#575757]  hover:text-black hover:font-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] duration-300 ${location.pathname == "/fonttemplatestore" ? "font-black text-black" : "font-bold"}`}>Templates</div></Link>
          {/* <Link to="/pricing"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Pricing</div></Link> */}
          {/* <Link to="/partner"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Partner</div></Link> */}
          <Link to="/about" className=' sm:block hidden'><div className={`text-[#575757] hover:text-black mb-[10px] cursor-pointer sm:text-[15px] hover:font-black text-[13px] duration-300 ${location.pathname == "/about" ? "font-black text-black" : "font-bold"}`}>About</div></Link>

        </div>
        <Link to={`/fontlab/${0}`} state={templates[0]}>
          <button className='h-[40px] w-[150px] sm:block hidden border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Try Demo</button>
        </Link>
      </div>

    </div>
  )
}
