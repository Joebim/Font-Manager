import React from 'react'
import twitter from "../assets/images/twitter.svg"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import dropbox from "../assets/images/dropbox.svg"

export default function footer() {
  return (
    <div className="w-full bg-black flex flex-row justify-between px-[50px] md:px-[80px] py-[60px]">
        <div className="w-[50%] md:w-[30%]">
            <div className="h-[40px] w-[80px] my-[12px] text-black bg-white rounded-[90px] font-bold justify-center flex items-center">Fontu</div>

            <p className='text-white mt-[20px]'>The No .1 font-style manager, taking you into the immersive world of fonts</p>
            <div className="w-[200px] flex justify-between flex-row mt-[50px] md:mt-[20px]">
                <img src={twitter} width="40" alt="" />
                <img src={facebook} width="40" alt="" />
                <img src={instagram} width="40" alt="" />
                <img src={dropbox} width="40" alt="" />
            </div>
        </div>
        <div className="w-[50%] text-white pl-[50px]">
            <ul>
                <li className='hover:text-[#c9c9c9] mb-[10px] cursor-pointer'>About</li>
                <li className='hover:text-[#c9c9c9] mb-[10px] cursor-pointer'>Contact</li>
                <li className='hover:text-[#c9c9c9] mb-[10px] cursor-pointer'>Support</li>
                <li className='hover:text-[#c9c9c9] mb-[10px] cursor-pointer'>Testimonials</li>
                <li className='hover:text-[#c9c9c9] mb-[10px] cursor-pointer'>Customer Policy</li>
            </ul>
        </div>
        
    </div>
  )
}
