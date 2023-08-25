import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import e from 'cors'
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { browsers } from '../../global_components/browsers';
import { webTools } from '../../global_components/webTools';
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { addNewTemplate } from './templateSlice';



export default function TemplateAddModal(props) {

    const dispatch = useDispatch()
 


    const [name, setName] = useState()
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [author, setAuthor] = useState()
    const [madeWith, setMadeWith] = useState([])
    const [responsive, setResponsive] = useState(false)
    const [day, setDay] = useState(dayjs('2022-04-07'))
    const [selectedTools, setSelectedTools] = useState([])
    const [selectedBrowsers, setSelectedBrowsers] = useState([])
    const [postRequestStatus, setPostRequestStatus] = useState("idle")

    // const [toolClicked, setToolClicked] = useState(false) 
    // const [browserClicked, setBrowserClicked] = useState(false) 





    const cancelButtonRef = useRef(null)

    
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeHtml = (e) => {
        setHtml(e.target.value)
    }

    const onChangeCss = (e) => {
        setCss(e.target.value)
    }
    
    const onChangeJs = (e) => {
        setJs(e.target.value)
    }

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const updateTools = (e, tool, index) => {
        // setToolClicked(true)

        let tools = selectedTools
        // console.log('e', e)
        const toolIndex = tools.indexOf(index)
        if (toolIndex == -1) {
            tools.push({
                'name': tool.name,
            }) 
            setSelectedTools(tools)
        }
        // console.log('toolClicked', toolClicked)
        setSelectedTools([...tools])
        console.log('selectedTools', selectedTools)
    }

    const updateBrowsers = (e, browser, index) => {
        // setBrowserClicked(true)
        let browsers = selectedBrowsers
        const browserIndex = browsers.indexOf(index)
        if (browserIndex == -1) {
            browsers.push({
                'name': browser.name,
            }) 
            setSelectedBrowsers(browsers)
        }
        // console.log('browserClicked', browserClicked)
        setSelectedBrowsers([...browsers])
        console.log('selectedBrowsers', selectedBrowsers)
    }

    const disableTools = (tool) => {
        for(let i = 0; i < selectedTools.length; i++) {
            if (selectedTools[i].name == tool.name) {
                return true
            } 
        }
    }

    const disableBrowsers = (browser) => {
        for(let i = 0; i < selectedBrowsers.length; i++) {
            if (selectedBrowsers[i].name == browser.name) {
                return true
            } 
        }
    }

    const removeTool = (index) => {
        let tools = selectedTools
        const toolIndex = tools.indexOf(index)
        if(toolIndex > -1) {
            setSelectedTools(tools)
        } else {
            tools.splice(index, 1)
            setSelectedTools(tools)
        }
        setSelectedTools([...tools])
        
        console.log('selectedTools', selectedTools)
    }

    const removeBrowser = (index) => {
        let browsers = selectedBrowsers
        const browserIndex = browsers.indexOf(index)
        if(browserIndex > -1) {
            setSelectedBrowsers(browsers)
        } else {
            browsers.splice(index, 1)
            setSelectedBrowsers(browsers)
        }
        setSelectedBrowsers([...browsers])
    }

    const onSubmit = (e,index) =>{
        // e.preventDefault()
        const template = {
            "id": index,
            "name": name,
            "author": author,
            "date": day.$d,
            "compactibleBrowsers": selectedBrowsers
            ,
            "madeWith":selectedTools,
            "responsive": responsive,
            "code": 
              {
                "html": html,
                "css": css,
                "js": js
              },
            }
            console.log('data', template)

            try {
                setPostRequestStatus("pending")
                dispatch(addNewTemplate(template))
            }
            catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setPostRequestStatus("idle")
            }
        // axios.post("http://localhost:8500/templates", {
        //     template
        // }).then((res) => {
        //     console.log('res', res)
        // }).catch((err) => {
        //     console.log('err', err)
        // })
    }


    const visibility = "visible"

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
                <div className="flex min-h-full w-[1000px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:ma min-h-[320px] max-h-[500px] pt-[30px] sm:pt-0">
                            <div className="h-[500px] w-full flex flex-col ">
                                
                                
                                <div className="flex flex-col p-[20px] overflow-y-auto">
                                    <div className="w-full flex-[1] pl-[10px] my-[20px] flex flex-col sm:flex-row items-center">
                                    <div className="sm:mr-[20px] mr-0 w-full pt-[15px] flex-[1]">
                                        <h1 className='my-[6px] text-[13px]'>Template Name</h1>
                                    
                                        <div className="w-full  px-[20px] h-[40px] border-solid border-[0.1pt] border-[#e2e2e2] rounded-[5px] flex justify-center items-center">
                                            <input type="text" onChange={onChangeName} className='w-full outline-none' />
                                        </div>
                                    </div>

                                    <div className="sm:mr-[20px] mr-0 w-full pt-[15px] flex-[1]">
                                        <h1 className='my-[6px] text-[13px]'>Author Name</h1>
                                    
                                        <div className="w-full  px-[20px] h-[40px] border-solid border-[0.1pt] border-[#e2e2e2] rounded-[5px] flex justify-center items-center">
                                            <input type="text" onChange={onChangeAuthor} className='w-full outline-none' />
                                        </div>
                                    </div>
                                    <div className="pt-[30px] flex-[1] w-full">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                        views={['day']}
                                        label="Date"
                                        value={day}
                                        onChange={(newValue) => {
                                            setDay(newValue);
                                            console.log('day', day.$d)
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />
                                    </LocalizationProvider>
                                    </div> 
                                </div>

                                <div className="w-full pl-[10px] my-[20px] flex flex-col gap-[20px] sm:flex-row items-start">
                                        <div className="flex-[1]">
                                            <h1 className='my-[6px] text-[13px]'>Responsive</h1>
                                            <div className="flex flex-row h-[40px] w-[130px]">
                                                <button value={true} className={`flex-[1] border-solid border-[1px] rounded-l-[5px]  ${responsive == true ? " bg-purple-900 text-white" : ""}`} 
                                                onClick={()=>{setResponsive(true)}}>Yes</button>
                                                <button value={false} className={`flex-[1] border-solid border-[1px] rounded-r-[5px] ${responsive == false ? " bg-purple-900 text-white" : ""}`} 
                                                onClick={()=>{setResponsive(false)}}>No</button>
                                            </div>
                                        </div>
                                        <div className="flex-[1] pr-[20px]">
                                            <h1 className='my-[6px] text-[13px]'>Built with</h1>
                                            <div className="py-[10px] border-solid border-b-[1pt] border-gray-200">
                                                {selectedTools.map((tool, index) => {
                                                    return (
                                                        <button className="" key={index+tool.name}
                                                        onClick={()=>{removeTool(index)}}>
                                                            <div className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] flex flex-row justify-between items-center" >{tool.name}
                                                            <div className="pl-[8px]">
                                                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                                <GrFormSubtract/>
                                                        </IconContext.Provider>
                                                            </div>
                                                         
                                                        </div>
                                                        </button>
                                                        
                                                    )
                                                })}
                                            </div>
                                            <div className="">
                                                {webTools.map((tool, index) => {
                                                    return (
                                                        <button className= {`${disableTools(tool) ? "hidden" : ""}`} id={index} key={index+tool.name}
                                                        onClick={(e)=>{
                                                            updateTools(e, tool, index)
                                                        }}>
                                                            <div className='px-[10px] py-[1px] text-black bg-gray-200 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] flex flex-row justify-between items-center' >{tool.name}
                                                            <div className="pl-[8px]">
                                                                <IconContext.Provider value={{ color: "#500062", className: "global-class-name" }}>
                                                            <IoIosAdd/>
                                                        </IconContext.Provider>
                                                            </div>
                                                         
                                                        </div>
                                                        </button>
                                                        
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex-[1]">
                                            <h1 className='my-[6px] text-[13px]'>Browser Compactibility</h1>
                                            <div className="py-[10px] border-solid border-b-[1pt] border-gray-200">
                                                {selectedBrowsers.map((browser, index) => {
                                                    return (
                                                        <button className="" key={index+browser.name}
                                                        onClick={()=>{removeBrowser(index)}}>
                                                            <div className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] flex flex-row justify-between items-center" >{browser.name}
                                                            <div className="pl-[8px]">
                                                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                                <GrFormSubtract/>
                                                        </IconContext.Provider>
                                                            </div>
                                                         
                                                        </div>
                                                        </button>
                                                        
                                                    )
                                                })}
                                            </div>
                                            <div className="">
                                                {browsers.map((browser, index) => {
                                                    return (
                                                        <button className={`${disableBrowsers(browser) ? "hidden" : ""}`} id={index} key={index+browser.name}
                                                        onClick={(e)=>{
                                                            updateBrowsers(e, browser, index)
                                                        }}>
                                                            <div className="px-[10px] py-[1px] text-black bg-gray-200 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] flex flex-row justify-between items-center">{browser.name}
                                                            <div className="pl-[8px]">
                                                                <IconContext.Provider value={{ color: "#500062", className: "global-class-name" }}>
                                                                <IoIosAdd/>
                                                        </IconContext.Provider>
                                                            </div>
                                                         
                                                        </div>
                                                        </button>
                                                        
                                                    )
                                                })}
                                            </div>
                                        </div>
                                </div>

                                <div className="flex flex-col sm:flex-row w-full flex-[5] border-t-[1pt] pt-[10px] mt-[10px] border-solid border-[#e1e1e1]">
                                    <div className="flex-[1] flex flex-col p-[10px]">
                                        <h1>HTML</h1>
                                        <div className="bg-white h-full w-full">
                                            <textarea type="text" onChange={onChangeHtml} className='h-[250px] overflow-y-visible w-full bg-[#f3f3f3]'/>
                                        </div>
                                    </div>
                                    <div className="flex-[1] flex flex-col p-[10px]">
                                        <h1>CSS</h1>
                                        <div className="bg-white h-full w-full">
                                            <textarea type="text" onChange={onChangeCss} className='h-[250px] overflow-y-visible w-full bg-[#f3f3f3]'/>
                                        </div>
                                    </div>
                                    <div className="flex-[1] flex flex-col p-[10px]">
                                        <h1>JAVASCRIPT</h1>
                                        <div className="bg-white h-full w-full">
                                            <textarea type="text" onChange={onChangeJs} className='h-[250px] overflow-y-visible w-full bg-[#f3f3f3]'/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="p-[20px] w-full">
                                    <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    {/* <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mt-[20px]'>Add Fonts</button> */}

                                    <button
                                        type="button"
                                        className={`inline-flex w-full justify-center rounded-[40px] border border-transparent ${ "bg-purple-800 hover:bg-purple-900"}  px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                                        onClick={(e) => {
                                            onSubmit(e)
                                            props.setOpen(false)
                                        }} 
                                        // disabled={fonts.length == 0 & selectedFonts.length == 0}
                                    >
                                        Add Template
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-[40px] border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => props.setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                </div>
                                
                                
                               
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
)
}

