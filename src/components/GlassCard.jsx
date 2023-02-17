import React from 'react'
import { useState } from 'react'

export default function GlassCard() {


    const [clicked, setClicked] = useState()
    const [index, setIndex] = useState(0)
  return (
    <div className="card-container h-[170px] w-[170px] p-[10px]" >
                    {/* {console.log('fonts', fonts)} */}
                <div className={`glass-card flex h-full w-full bg-white border-solid border-[1px] justify-center items-end border-[#ffffff2e] rounded-[15px] absolute transition-all duration-[0.4s] ease-linear ${clicked == index ? "flip" : ""}`}>
          
                <div className={`front absolute w-[170px] p-[20px] flex flex-row justify-between items-center  ${clicked == index ? "flip" : ""}`}
                >
                    <p className=' font-normal text-purple-600 text-[10px]' 
                    // style={{
                    //     fontFamily: font.font.family
                    // }}
                    >
                        {/* {font.font.family} */}
                        </p>
                    <Viewbutton 
                    // setClicked={setClicked} clicked= {clicked} index={index}
                    />
                </div>
                <div className={`back absolute h-[170px] w-full flex flex-col justify-between items-center p-[20px] ${clicked == index ? "flip" : ""}`}>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p className=' font-normal text-purple-600 text-[10px]'>
                            {/* {font.font.family} */}
                            </p>
                        <div className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] flex flex-row text-center text-[12px] justify-center items-center">
                            {/* {font.font.category} */}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full border-solid border-t-[1px] border-[#deadff] my-[5px]"></div>
                        <div className="">
                            {/* {font.font.variants.map((weight , index)=> {
                                return(
                                    <button className="px-[10px] py-[1px] text-white bg-black rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]" key={index+weight}>{weight}</button>
                                )
                            })} */}
                        </div>
                        <div className="w-full border-solid border-b-[1px] border-[#deadff] my-[5px]"></div>
                    </div>
                    
                    
                    <div className="w-full flex justify-end">
                        <Viewbutton setClicked={setClicked} clicked= {clicked}/>
                    </div>
                    
                </div>
        
                
            </div>
        </div>
  )
}
