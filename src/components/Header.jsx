import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full hidden md:flex justify-between h-[100px] items-center px-[80px]'>
      <Link to="/">
        <div className="h-[40px] w-[80px] my-[12px] text-white bg-purple-900 rounded-[90px] font-bold justify-center flex items-center">Fontu</div>
      </Link>
        <div className="flex w-[300px] justify-between">
          <Link to="/"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Home</div></Link>
          <Link to="/fontstore"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Fonts Tray</div></Link>
          <Link to="/fonttemplatestore"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Templates</div></Link>
          {/* <Link to="/pricing"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Pricing</div></Link> */}
          {/* <Link to="/partner"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Partner</div></Link> */}
          <Link to="/about"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>About</div></Link>
          
        </div>
        <button className='h-[40px] w-[150px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
    </div>
  )
}
