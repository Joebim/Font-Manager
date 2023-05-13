import React from 'react'
import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { allTemplates, getTemplateStatus, fetchTemplates } from './templateSlice'
import { IconContext } from 'react-icons'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";


export default function TemplateSelectModal(props) {

    const [mouseEnter, setMouseEnter] = useState()



  const cancelButtonRef = useRef(null)



  const addToTray = (template, index, id, e) => {
    console.log('index', index)
    let selectedTemplates = props.templateTray
    console.log('templateAdd', template)
    // const templateTrayIndex = selectedTemplates.indexOf(id)
    // console.log('templateTrayIndex', templateTrayIndex)
    // console.log('templateCheck(template', templateCheck(template))
    const findIndex = selectedTemplates.findIndex((index)=> index.id === id)
    console.log('findIndex', findIndex)
    if(findIndex == -1) {
        selectedTemplates.push({
            "name": template.name,
            "author": template.author,
            "date": template.date,
            "compactibleBrowsers": template.compactibleBrowsers,
            "madeWith": template.madeWith,
            "responsive": template.responsive,
            "code": template.code,
            "id": id
        })
        props.setTemplateTray(selectedTemplates)
    } else {

            selectedTemplates.splice(findIndex, 1)
            props.setTemplateTray(selectedTemplates)
        }

        props.setTemplateTray([...selectedTemplates])
}
  
  const templateCheck = (templates) => {
    
    for(let i = 0; i < props.templateTray.length; i++){ 
        if (props.templateTray[i].name == templates.name) {
            return true
        }
    }   
}

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
            <div className="flex min-h-full w-[900px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                        <div className="min-h-[320px] max-h-[400px] w-full">
                            <div className="h-full max-h-[400px] w-full p-[20px] overflow-y-scroll">
                                {props.templates.map((template,index)=>{
                                    return (
                                        <div className="inline-block h-[150px] w-full border-solid border-t-[1pt] border-gray" key={index}
                                        onMouseEnter={() => setMouseEnter(index)}
                                        onMouseLeave={() => setMouseEnter(null)}
                                        onClick={(e) => addToTray(template,index,template.id,e)}
                                        >

                                            <div className={`h-full w-full bg-white border-solid border-[2pt] px-[20px] ${templateCheck(template) ? "bg-purple-600": "hover:bg-purple-50 hover:ml-[15px]"} duration-150 ease-linear border-transparent cursor-pointer flex flex-row justify-between items-center text-center`}>
                                            <h1 className={`template-bold text-[15px] text-left ${templateCheck(template) ? "text-white" : "text-purple-900"}`}>{template.name}</h1>
                                            <p className={`text-[13px] ${templateCheck(template) ? "text-white" : "text-black"} `}>{template.author}</p>  
                                            <div className="flex flex-row">
                                                {template.madeWith.map((tag, index)=>{
                                                    return (
                                                        <button className={`px-[10px] py-[1px] ${templateCheck(template) ? "text-white border-white" : "text-purple-900 border-purple-900"}  border-solid border-[2pt] rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]`} key={index}>{tag.name}</button>
                                                    )
                                                })}
                                            </div>

                                            <div className="text-[18px]">
                                                {mouseEnter == index && !templateCheck(template) ? 
                                                <IconContext.Provider value={{color: '#610091', className: "global-class-name"}}>
                                                    <BsFillArrowRightCircleFill/> 
                                                </IconContext.Provider>
                                                
                                                : templateCheck(template) ? 
                                                <IconContext.Provider value={{color: `${templateCheck(template) ? "white" : "#610091"}`, className: "global-class-name"}}>
                                                    <BsCheckCircle/>
                                                </IconContext.Provider>
                                                :
                                                <IconContext.Provider value={{color: '#610091', className: "global-class-name"}}>
                                                    <IoAddCircleOutline/>
                                                </IconContext.Provider>}
                                        
                                            </div>
                                            
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    {/* <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mt-[20px]'>Add templates</button> */}

                                    {/* <button
                                        type="button"
                                        // className={`inline-flex w-full justify-center rounded-[40px] border border-transparent ${templates.length == 0 & selectedTemplates.length == 0 ? "bg-neutral-400 hover:bg-neutral-400" : "bg-purple-800 hover:bg-purple-900"}  px-4 py-2 text-base template-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                                        className={`inline-flex w-full justify-center rounded-[40px] border border-transparent   px-4 py-2 text-base template-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}

                                        // onClick={(e) => {
                                        //     addtemplatesToStore(e)
                                        //     props.setOpen(false)
                                        // }} disabled={templates.length == 0 & selectedTemplates.length == 0}
                                    >
                                        Add templates
                                    </button> */}
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-[40px] border border-gray-300 bg-white px-4 py-2 text-base template-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
