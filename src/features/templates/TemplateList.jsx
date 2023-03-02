import React from 'react'
import { Link } from 'react-router-dom'
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import { CgCarousel } from "react-icons/cg";

export default function TemplateList(props) {

    return (
        <Link to={`/fonttemplatestore/${props.index}`} state={props.template}>
            <div className="h-[300px] w-[200px] bg-[#e3c7ff] rounded-[18px] p-[15px] flex flex-col justify-between">
        <div className="w-full flex justify-end">
        <div className="h-[32px] w-[32px] bg-white rounded-[5px] flex justify-center items-center">
        <IconContext.Provider value={{ color: "#500062", className: "global-class-name" }}>
            <HiHeart/>
        </IconContext.Provider>
        
        </div>
        </div>

        <div className="h-[60px] w-full rounded-[10px] bg-white flex flex-row justify-between px-[15px] items-center">
            <div className="">
                <h1 className='text-purple-900 text-[11px] font-bold'>{props.template.template.name}</h1>
            </div>
            <div className="h-[28px] w-[28px] bg-purple-900 rounded-[5px] flex justify-center items-center">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <CgCarousel/>
            </IconContext.Provider>
            </div>
        </div>
        </div>
        </Link>
        
    )
}
