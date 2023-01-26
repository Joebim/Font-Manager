import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ReactComponent as AddIcon } from "../assets/images/Add-Icon.svg"
import { FileUploader } from "react-drag-drop-files";
import { useDropzone } from 'react-dropzone';
import fileImg from '../assets/images/fileImg.png'
import axios from 'axios'



// const fileTypes = ["ttf", "otf", "woff", "woff2"];

export default function Modal(props) {
    // const [open, setOpen] = useState(true) 
    const [files, setFiles] = useState([]);
    const [tab, setTab] = useState(1)
    const [selectedFonts, setSelectedFonts] = useState([])
    // const [postFontsData, setPostFontsData] = useState({})

    const onDrop = useCallback(acceptedFiles => {

        console.log('acceptedFiles', acceptedFiles)
        setFiles(acceptedFiles.map((file) => Object.assign(file, {
            // name: file.name,
            preview: URL.createObjectURL(file)
        })));

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({

        onDrop: onDrop
    })


    const fonts = files.map((file) => (
        <div key={file.name} className=" flex justify-center items-center text-center px-[5px] mx-[5px] h-[120px] w-[90px] relative">
            <img src={fileImg} alt="" className='absolute' />
            <h1 className='z-[1] text-[10px] relative'>{file.name}</h1>
        </div>
    )
    ) 

    // console.log('postFontData', postFontsData)

    const addFontsToStore = (e) => {
        e.preventDefault()

        selectedFonts.forEach(font =>{
        console.log('font', font)
            axios.post('http://localhost:8500/fonts', {
                font
            }).then((res) => {
                console.log('res', res)
            }).catch((err) => {
                console.log('err', err)
            })
        })
    }
        



    const addFonts = (e,index,fonts) => {
        console.log('e.target.checked', e.target.checked)
        let selectFonts = selectedFonts
    
        let fontIndex = selectFonts.indexOf(index)


        if (e.target.checked) {
            selectFonts.push({
                "family": fonts.family,
                "variants": fonts.variants,
                "subsets": fonts.subsets,
                "version": fonts.version,
                "lastModified": fonts.lastModified,
                "files": fonts.files,
                "category": fonts.category,
                "kind": fonts.kind
            })
            setSelectedFonts(selectFonts)
        } else {
            selectFonts.splice(fontIndex, 1)
            setSelectedFonts(selectFonts)
        }

        setSelectedFonts([...selectFonts])

    }

    console.log('selectedFonts', selectedFonts)


    // console.log('fonts', fonts)
    //     const handleChange = (file) => {
    //     setFile(file);
    //   };
    const cancelButtonRef = useRef(null)

    const visibility = "visible"
 
  const disableCheck = (fonts) => {
    
        for(let i = 0; i < props.fonts.length; i++){ 
            if (props.fonts[i].font.family == fonts.family) {
                return true
            }
        }   
        
  
        return false
  }

// console.log('allGoogleFonts', props.allGoogleFonts)

    


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
                    <div className="flex min-h-full w-[600px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                                <div className="w-full flex justify-center items-center">
                                    <div className="w-[40%] px-[20px] flex justify-between">
                                        <div className={`w-full h-[35px] text-[12px] cursor-pointer ${tab == 1 ? "bg-purple-900 text-white" : "bg-white text-purple-900"} mt-[20px] flex justify-center items-center rounded-l-[50px] border-solid border-[0.1pt] border-[#e2e2e2]`}
                                        onClick={()=>{setTab(1)}}>Import</div>
                                        <div className={`w-full h-[35px] text-[12px] cursor-pointer ${tab == 2 ? "bg-purple-900 text-white" : "bg-white text-purple-900"} mt-[20px] flex justify-center items-center rounded-r-[50px] border-solid border-[0.1pt] border-[#e2e2e2]`}
                                        onClick={()=>{setTab(2)}}>Search</div>
                                    </div>
                                    
                                </div>

                                {tab == 1 ? <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-6 max-h-[500px] min-h-[auto]">
                                    <div className="w-full flex justify-center items-center flex-col">
                                        {visibility == "visible" ? <div className="w-[80%] h-full min-h-[130px] border-solid border-[3px] border-[#e2cdff] cursor-pointer rounded-[20px] flex flex-col justify-center items-center">
                                            <div className="h-full w-full p-[20px] flex flex-col justify-center items-center" {...getRootProps()}>
                                                {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
                                                <input {...getInputProps()} className=" h-[200px]" />
                                                <AddIcon alt="" width="80" className='fill-transparent stroke-[#e2cdff] mb-[10px] z-10' />
                                                {isDragActive ? <h1 className='text-purple-900 text-[13px] font-bold'>Drop the files here ...</h1> :
                                                <h1 className='text-purple-400 text-[13px] font-bold'>Click to <span className='text-purple-900'>Upload</span> or <span className='text-purple-900'>Drag and Drop</span></h1>
                                                } 
                                            </div> 
                                        </div> : ""}
                                        {fonts.length == 0 ? "" : <div className="w-[80%] h-[140px] p-[10px] overflow-y-scroll border-solid border-[1px] border-[#cfcfcf] mt-[40px] grid grid-cols-1 md:grid-cols-4 rounded-[20px]">{fonts}</div>}

                                    </div>
                                  
                                </div> : <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[500px] min-h-[auto]">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="w-[60%] flex flex-row">
                                                <div className="w-[85%] h-[40px] border-solid border-[0.1pt] border-[#e2e2e2] rounded-l-full flex justify-center items-center">
                                                    <input type="text" className=' outline-none' />
                                                </div>
                                                <div className="w-[15%] h-[40px] border-solid border-[0.1pt] border-[#e2e2e2] rounded-r-full flex justify-center items-center cursor-pointer">
                                                    <MagnifyingGlassIcon className='w-[15px]'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-[270px] p-[20px] rounded-[20px] mt-[20px] flex flex-row">
                                            <div className="flex-[5] overflow-y-scroll">
                                                {props.allGoogleFonts.map((fonts, index)=>{
                                                   
                                                    return(
                                                    <div className="flex flex-row items-center hover:bg-[#f7f7f77e] pl-[15px] border-[#eaeaea] border-t-[0.5pt] border-solid" key={index+fonts.family}>
                                                        {/* { console.log('Google fonts', fonts)} */}
                                                    <input type="checkbox" name="" id="" onClick={(e)=>{addFonts(e, index, fonts)}} 
                                                    disabled={disableCheck(fonts)}  />
                                                    <div className="w-full h-[40px] ml-[10px] flex items-center justify-start text-[12px] text-[#5c5c5c]">{fonts.family}</div>
                                                </div>
                                                )
                                                })}
                                                 
                                                
                                            </div>
                                            <div className="flex-[2] border-solid border-l-[0.5pt] border-t-[0.5pt] border-[#eaeaea] p-[15px] ml-[20px] rounded-tl-[20px] overflow-y-scroll">
                                                {selectedFonts.map((font, index)=>{
                                                    return (
                                                        <button className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]" key={index+font.family}>{font.family}</button>

                                                    )

                                                })}
                                            </div>
                                        </div>
                                    </div>}

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    {/* <button className='h-[30px] md:h-[50px] w-[90px] md:w-[140px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white mt-[20px]'>Add Fonts</button> */}

                                    <button
                                        type="button"
                                        className={`inline-flex w-full justify-center rounded-[40px] border border-transparent ${fonts.length == 0 & selectedFonts.length == 0 ? "bg-neutral-400 hover:bg-neutral-400" : "bg-purple-800 hover:bg-purple-900"}  px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                                        onClick={(e) => {
                                            addFontsToStore(e)
                                            props.setOpen(false)
                                        }} disabled={fonts.length == 0 & selectedFonts.length == 0}
                                    >
                                        Add Fonts
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}



// I am trying to make a modal that has a file uploader in it. I am using the file uploader from this tutorial: