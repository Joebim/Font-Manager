import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full flex justify-between h-[100px] items-center px-[65px] sm:px-[80px]'>
      <Link to="/" className='sm:block hidden'>
        <div className="px-[17px] py-[5px] my-[12px] text-white bg-purple-900 rounded-[90px] font-bold justify-center flex items-center">Fontasie</div>
      </Link>
        <div className="flex w-[300px] justify-between">
          <Link to="/"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] font-bold'>Home</div></Link>
          <Link to="/fontstore"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] font-bold'>Fonts Tray</div></Link>
          <Link to="/fonttemplatestore"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer sm:text-[15px] text-[13px] font-bold'>Templates</div></Link>
          {/* <Link to="/pricing"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Pricing</div></Link> */}
          {/* <Link to="/partner"><div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Partner</div></Link> */}
          <Link to="/about" className=' sm:block hidden'><div className=' text-[#575757] hover:text-black mb-[10px] cursor-pointer sm:text-[15px] text-[12px] font-bold'>About</div></Link>
          
        </div>
        <button className='h-[40px] w-[150px] sm:block hidden border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
    </div>
  )
}
