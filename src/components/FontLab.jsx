import React,{useState, useEffect, useRef} from 'react'
import DiscreteSliderMarks from '../global_components/Slider'
import axios from 'axios'
import { Controlled as CodeMirror } from 'react-codemirror2';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allFonts, getFontStatus, fetchFonts } from '../features/fonts/fontSlice';
import { allTemplates, getTemplateStatus, fetchTemplates } from '../features/templates/templateSlice';
import { FaListUl } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IconContext } from 'react-icons';
import FontSelectModal from '../features/fonts/FontSelectModal';
import TemplateSelectModal from '../features/templates/TemplateSelectModal';



import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
// import CodeEditor from './CodeEditor'


export default function FontLab() {

  const dispatch = useDispatch()
const location = useLocation();

   
    const [fonts, setFonts] = useState([])
    const [templates, setTemplates] = useState([])
    // const fontsStatus = useSelector(getFontStatus)
    // const templatesStatus = useSelector(getTemplateStatus)
    const [allGoogleFonts, setAllGoogleFonts] = useState([])
    const [template, setTemplate] = useState(location.state)
    const [id, setId] = useState('')
    const [html, setHtml] = useState(template.code.html)
    const [css, setCss] = useState(template.code.css)
    const [js, setJs] = useState(template.code.js)
    const [gridToggle, setGridToggle] = useState(false)
    const [openFontModal, setOpenFontModal] = useState(false)
    const [openTemplateModal, setOpenTemplateModal] = useState(false)

    // console.log('template', template)
  

    

    // useEffect(() => {

    //   if(fontsStatus === 'idle') {
    //     dispatch(fetchFonts())
    // }
    // if (templatesStatus === 'idle') {
    //   dispatch(fetchTemplates())

    // }
      
    // }, [fontsStatus, dispatch, templatesStatus])





    useEffect(() => {
        runCode()
      }, [html, css, js])
      
    
    useEffect(() => {
      setId(pushid())
    }, [])
    


    const runCode = () => {
        // const { html, css, js } = state;
    
        const iframe = iframeRef.current;
        const document = iframe.contentDocument;
        const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
    
            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;
    
        document.open();
        document.write(documentContents);
        document.close();
      };

    const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
      };
  

    const iframeRef = React.createRef();
  return (
    <>
    <div className="w-full p-[30px] bg-[#f8f3ff] h-[700px] flex flex-col-reverse md:flex-row ">
        <div className="flex flex-[40] max-w-[40%] p-[20px] flex-col pr-[50px]">
            <div className="w-full h-full">
                <div className="w-full h-full bg-white drop-shadow-[0_35px_15px_#efefef] rounded-[20px] flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="flex-[12] px-[20px] bg-purple-200 rounded-tr-[20px] rounded-tl-[20px] flex flex-row items-center">
                        <div className="h-[40px] w-full rounded-full"></div>
                        <div className="flex flex-row w-[50px]">
                          <IconContext.Provider value={{ color: "#3f166a", className: "global-class-name" }}>
                          {gridToggle ? 
                            <button className="h-[40px] w-[30px] flex justify-center items-center text-[19px]" 
                            onClick={()=>setGridToggle(!gridToggle)}
                            ><BsGridFill/></button> :
                            <button className="h-[40px] w-[30px] flex justify-center items-center text-[19px]" 
                            onClick={()=>setGridToggle(!gridToggle)}
                            ><FaListUl/></button>
                          }
                          </IconContext.Provider>
                          
                        </div>
                      </div>
                      <div className="flex-[80] py-[20px] flex justify-center overflow-y-scroll w-full h-full px-[20px]">
                        <div className={`h-full w-full ${gridToggle ? "grid-cols-1" : "grid-cols-2"} grid  gap-4`}>
                        {/* {fonts.map((font, index)=>{
                            return (
                              // <div className="h-[120px] w-full rounded-[20px] border-solid border-[2pt] border-[#0a9147] p-[5px]">
                              <div className="h-[120px] w-full rounded-[20px] drop-shadow-md border-solid border-[2pt] border-transparent p-[5px]">

                                <button className=" text-black bg-white border-solid border-[2pt] border-transparent hover:border-[#0a9147] h-full w-full rounded-[15px]  text-center text-[10px]" key={index+font.family}>
                                <h1 className='text-[50px]' style={{fontFamily: font.family}}>A</h1>
                                <p className=' text-purple-900'>{font.family}</p>
                                </button>
                              </div>
                            )
                        })}  */}
                        <div className="h-[120px] w-full rounded-[20px] border-solid border-[2pt] border-transparent p-[5px]">
                          <button className="flex bg-gray-200 border-solid border-[2pt] border-transparent h-full w-full rounded-[15px] justify-center items-center text-center text-[30px] text-[#0a9147]" 
                          onClick={()=>setOpenFontModal(true)}
                          >+</button>
                        </div>             
                        </div>
                      </div>
                       
                    </div>
                    {/* <div className="flex-[40] p-[20px]">
                        <h1 className='font-bold'>Selected</h1>
                        <div className="h-full w-full border-solid border-t-[0.1pt] border-[#e2e2e2] pt-[10px]">

                        </div>
                    </div> */}
                </div>
            </div>
           
        </div>

        <div className="flex flex-col flex-[60] max-w-[60%] p-[20px] pl-[50px] border-solid border-l-[0.1pt] border-[#e2e2e2">
            <div className="flex-[75] rounded-[20px] bg-white">

              <section className="result rounded-[20px] h-full">
                <iframe title="result" className="iframe" ref={iframeRef} />
              </section>

            </div>
            <div className="w-full flex-[13] pt-[10px]">
                <div className="w-full h-full flex items-center justify-center relative">
                   <DiscreteSliderMarks/>
                </div>
            </div>

            <div className="w-full flex-[12] flex items-center justify-center">
                <div className="h-[50px] w-full flex items-center justify-center rounded-full bg-white">
                    <input type="text" className='w-[80%] outline-none' placeholder='Input Text' />
                </div>
            </div>

            <div className="flex-[25] flex justify-center w-full pt-[30px] pb-[10px] overflow-x-scroll">
                <div className="h-full w-full flex flex-row grid-rows-1 gap-1">
                  {/* {templates.map((template, index)=>{
                    return (
                    // <div className=" h-full w-[140px] rounded-[20px] border-solid border-[3pt] border-[#1dc669] p-[5px] mr-[20px]" key={index}>
                    <div className=" h-full min-w-[140px] rounded-[20px] border-solid border-[3pt] border-transparent p-[5px]" key={index}>

                      <div className="h-full w-full rounded-[15px] bg-white drop-shadow-md border-solid border-[2pt] hover:border-[#0a9147] border-transparent cursor-pointer p-[10px] flex justify-center items-center text-center">
                        <h1 className='font-bold text-[15px] text-purple-600'>{template.name}</h1>
                      </div>
                    </div>
                    )
                  })} */}
                  

                  <div className=" h-full min-w-[140px] w-[140px] rounded-[20px] border-solid border-[3pt] p-[5px] border-transparent">
                    <div className="h-full w-full rounded-[15px] bg-gray-200 cursor-pointer p-[10px] flex justify-center items-center text-center text-[30px] text-purple-800 font-black "
                    onClick={()=>setOpenTemplateModal(true)}
                    >
                      +
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
    



        <section className="playground  w-full hidden">
          <div className="code-editor html-code flex-[4] h-[300px] overflow-y-visible">
            <div className="editor-header">HTML</div>
            <CodeMirror
              value={html}
              options={{
                mode: 'htmlmixed',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, html) => {
                setHtml(html);
              }}
            />
          </div>
          <div className="code-editor css-code flex-[3] h-[300px] overflow-y-visible">
            <div className="editor-header">CSS</div>
            <CodeMirror
              value={css}
              options={{
                mode: 'css',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, css) => {
                setCss(css);
              }}
            />
          </div>
          <div className="code-editor js-code flex-[3] h-[300px] overflow-y-visible">
            <div className="editor-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                setJs(js);
              }}
            />
          </div>
        </section>

        <FontSelectModal open={openFontModal} setOpen={setOpenFontModal}/>
        <TemplateSelectModal open={openTemplateModal} setOpen={setOpenTemplateModal}/>
    </>
    
    
  )
}


