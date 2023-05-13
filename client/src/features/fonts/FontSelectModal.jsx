import React from 'react'
import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { allFonts, fetchFonts, getFontStatus } from './fontSlice'
import { IconContext } from 'react-icons'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";


export default function FontSelectModal(props) {


  const [mouseEnter, setMouseEnter] = useState()

//   const [fontTray, setFontTray] = useState()





  const cancelButtonRef = useRef(null)



const addToTray = (font, index, id, e) => {
    console.log('index', index)
    let selectedfonts = props.fontTray
    console.log('fontAdd', font)
    // const fontTrayIndex = selectedfonts.indexOf(id)
    // console.log('fontTrayIndex', fontTrayIndex)
    console.log('fontCheck(font', fontCheck(font))
    const findIndex = selectedfonts.findIndex((index)=> index.id === id)
    console.log('findIndex', findIndex)
    if(findIndex == -1) {
        selectedfonts.push({
            "family": font.family,
            "variants": font.variants,
            "subsets": font.subsets,
            "version": font.version,
            "lastModified": font.lastModified,
            "files": font.files,
            "category": font.category,
            "kind": font.kind,
            "id": id
        })
        props.setFontTray(selectedfonts)
    } else {

            selectedfonts.splice(findIndex, 1)
            props.setFontTray(selectedfonts)
        }

        props.setFontTray([...selectedfonts])
}

const fontCheck = (fonts) => {
    
    for(let i = 0; i < props.fontTray.length; i++){ 
        if (props.fontTray[i].family == fonts.family) {
            return true
        }
    }   
}

// console.log('mouseHover', mouseEnter)

  return (
    <Transition.Root show={props.open} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpen}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center">
            <div className="flex min-h-full w-[800px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:ma min-h-[320px] max-h-[500px]">
                        <div className="h-[40px] w-full bg-purple-100"></div>
                      <div className="min-h-[320px] max-h-[400px] flex flex-row">
                        <div className="flex w-full max-h-[400px] p-[20px] overflow-y-scroll justify-center">
                            <div className="w-full">
                                {props.fonts.map((font, index) => {
                                return (
                                    <div className="group h-[120px] w-full border-solid border-t-[1pt] border-grey duration-100 ease-linear p-[5px] inline-block" key={index+font.family}
                                    onMouseEnter={() => setMouseEnter(index)}
                                    onMouseLeave={() => setMouseEnter(null)}
                                    onClick={(e) => addToTray(font,index,font.id,e)}
                                    >

                                    <button className={`flex flex-row px-[20px] ${fontCheck(font) ? "bg-purple-600": "hover:bg-purple-50 hover:ml-[15px]"}  duration-100 ease-linear text-black border-solid border-[2pt] border-transparent h-full w-full items-center justify-between text-center text-[10px]`} >
                                    <h1 className={`text-[50px] ${fontCheck(font) ? "text-white" : ""}`} style={{fontFamily: font.family}}>A</h1>
                                    <p className={`text-[12px] ${fontCheck(font) ? "text-white" : "text-purple-900"}`} style={{fontFamily: font.family}}>{font.family}</p>
                                    <p className={`text-[12px] ${fontCheck(font) ? "text-white" : ""}`} style={{fontFamily: font.family}}>The quick brown fox jumps over the lazy dog</p>
                                    
                                    
                                       <div className="text-[18px]">
                                         {mouseEnter == index && !fontCheck(font) ? 
                                         <IconContext.Provider value={{color: '#610091', className: "global-class-name"}}>
                                            <BsFillArrowRightCircleFill/> 
                                         </IconContext.Provider>
                                         
                                         : fontCheck(font) ? 
                                         <IconContext.Provider value={{color: `${fontCheck(font) ? "white" : "#610091"}`, className: "global-class-name"}}>
                                            <BsCheckCircle/>
                                         </IconContext.Provider>
                                           :
                                           <IconContext.Provider value={{color: '#610091', className: "global-class-name"}}>
                                            <IoAddCircleOutline/>
                                           </IconContext.Provider>}
                                        
                                    </div>
                                   
                                    </button>
                                  </div>
                                )
                            })}
                            </div>
                            
                        </div>
                      </div>
                      
                      
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    {/* <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mt-[20px]'>Add Fonts</button> */}

                                    {/* <button
                                        type="button"
                                        // className={`inline-flex w-full justify-center rounded-[40px] border border-transparent ${fonts.length == 0 & selectedFonts.length == 0 ? "bg-neutral-400 hover:bg-neutral-400" : "bg-purple-800 hover:bg-purple-900"}  px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                                        className={`inline-flex w-full justify-center rounded-[40px] border border-transparent   px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}

                                        // onClick={(e) => {
                                        //     addFontsToStore(e)
                                        //     props.setOpen(false)
                                        // }} disabled={fonts.length == 0 & selectedFonts.length == 0}
                                    >
                                        Add Fonts
                                    </button> */}
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-[40px] border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => props.setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                    </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
  )
}
