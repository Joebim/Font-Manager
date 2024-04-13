import React from 'react'
import { HiHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { allTemplates } from '../templates/templateSlice';


export default function FontList(props) {

    const templates = useSelector(allTemplates)

    console.log('templates', templates)


    return (
        <div className="h-[160px] sm:h-[200px] w-[150px] sm:w-[190px] p-[10px] group" >
            <div className="h-full w-full bg-purple-200 flex flex-col rounded-[10px]">
                <div className="flex-[2] flex justify-end w-full">
                    <div className="h-full w-[20%] bg-purple-900 rounded-tr-[10px] rounded-bl-[20px] flex justify-center items-center">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <HiHeart />
                        </IconContext.Provider>
                    </div>
                </div>
                <Link to={`/fontstore/${props.index}`} state={props.font} className='flex-[6]'>
                    <div className=" flex justify-center items-start text-[70px]">
                        <h1 id={`text${props.index}`} className='text-[50px]' style={{ fontFamily: `${props.font.family}`, }}>Aa</h1>
                    </div>
                </Link>

                <Link to={`/fontlab/${props.index}`} state={templates[0]} className='flex-[2]'>
                    <div className=" bg-purple-400 rounded-b-[10px] flex justify-center items-center h-full">
                        <div className="flex justify-center h-full flex-[2] items-center px-[20px]">
                            <h1 className='text-white text-[12px]'>{props.font.family}</h1>
                        </div>

                        <div className="bg-black h-full flex justify-center items-center w-0 group-hover:w-auto group-hover:flex-[1] group-hover:px-[20px] text-[12px] duration-300 text-transparent group-hover:text-white rounded-br-[10px]">
                            Use
                        </div>

                    </div>
                </Link>
            </div>
        </div>


    )
}
