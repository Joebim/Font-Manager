import React from 'react'

export const Viewbutton = (props) => {
  return (
    <div className="h-[20px] w-[30px] bg-[#2c124a] rounded-[10px] flex flex-row justify-between items-center px-[6px] cursor-pointer"
    onClick={()=> {props.setClicked(props.index)}}
    >
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
    </div>
  )
}
