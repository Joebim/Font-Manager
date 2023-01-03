import React from 'react'

export default function Header() {
  return (
    <div className='w-full hidden md:flex justify-between h-[80px] items-center px-[80px]'>
        <div className="h-[60px] w-[60px] my-[12px] text-white bg-black rounded-[90px] font-bold justify-center flex items-center">Fontu</div>
        <div className="flex w-[30%] justify-between">
            <div>Home</div>
            <div>App</div>
            <div>Pricing</div>
            <div>Partner</div>
            <div>AboutUs</div>
        </div>
        <button className='h-[40px] w-[150px] border-black border-solid border-[1px] rounded-[40px] text-center duration-[0.5s] text-black hover:text-white hover:bg-black'>Sign In</button>
    </div>
  )
}
