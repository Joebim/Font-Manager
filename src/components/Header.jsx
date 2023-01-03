import React from 'react'

export default function Header() {
  return (
    <div className='w-full hidden md:flex justify-between h-[100px] items-center px-[80px]'>
        <div className="h-[60px] w-[60px] my-[12px] text-white bg-black rounded-[90px] font-bold justify-center flex items-center">Fontu</div>
        <div className="flex w-[30%] justify-between">
        <div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Home</div>
        <div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>App</div>
        <div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Pricing</div>
        <div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>Partner</div>
        <div className=' text-[#575757]  hover:text-black mb-[10px] cursor-pointer'>AboutUs</div>
        </div>
        <button className='h-[40px] w-[150px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
    </div>
  )
}
