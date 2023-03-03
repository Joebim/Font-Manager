import React from 'react'
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'

export default function FontList(props) {
   
    return(
        <Link to={`/fontstore/${props.index}`} state={props.font}>
        <div className="h-[200px] w-[190px] p-[10px]" >
            <div className="h-full w-full bg-purple-200 flex flex-col rounded-[10px]">
                <div className="flex-[2] flex justify-end w-full">
                    <div className="h-full w-[20%] bg-purple-900 rounded-tr-[10px] rounded-bl-[20px] flex justify-center items-center">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <HiHeart/>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="flex-[6] flex justify-center items-start text-[70px]">
                    <h1 id={`text${props.index}`} className='text-[50px]' style={{fontFamily:`${props.font.family}`,}}>Aa</h1>
                </div>
                <div className="flex-[2] bg-purple-400 rounded-b-[10px] flex justify-center items-center">
                    <h1 className='text-white text-[12px]'>{props.font.family}</h1>
                </div>
            </div>
        </div>
        </Link>
        
    )
}
