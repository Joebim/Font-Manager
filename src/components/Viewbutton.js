import React from 'react'

export const Viewbutton = (props) => {
  return (
    <div className="h-[20px] w-[25px] bg-purple-900 rounded-[3px] flex flex-row justify-between items-center px-[5px] cursor-pointer"
    onClick={()=> {props.setClicked(props.index)}}
    >
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
        <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
    </div>
  )
}
