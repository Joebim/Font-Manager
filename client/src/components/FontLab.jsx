import React,{useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom';
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
import FontAddModal from '../features/fonts/FontAddModal';
import TemplateAddModal from '../features/templates/TemplateAddModal';
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

const fontsData = useSelector(allFonts)
const templatesData = useSelector(allTemplates)

    const [documentContent, setDocumentContent] = useState()
    const [fonts, setFonts] = useState(fontsData)
    const [templates, setTemplates] = useState(templatesData)
    const fontsStatus = useSelector(getFontStatus)
    const templatesStatus = useSelector(getTemplateStatus)
    const [allGoogleFonts, setAllGoogleFonts] = useState([])
    const [template, setTemplate] = useState(location.state)
    const [templateId, setTemplateId] = useState(template.id)
    const [id, setId] = useState('')
    const [html, setHtml] = useState(template.code.html)
    const [css, setCss] = useState(template.code.css)
    const [js, setJs] = useState(template.code.js)
    const [gridToggle, setGridToggle] = useState(false)
    const [openFontModal, setOpenFontModal] = useState(false)
    const [openTemplateModal, setOpenTemplateModal] = useState(false)
    const [fontSelected, setFontSelected] = useState()
    const [templateSelected, setTemplateSelected] = useState()
    
    
   
    const iframeRef = React.createRef();


    // console.log('template', template)
  

    // console.log('fonts', fonts)

    useEffect(() => {

      if(fontsStatus === 'idle') {
        dispatch(fetchFonts())
    }
    if (templatesStatus === 'idle') {
      dispatch(fetchTemplates())

    }
      
    }, [fontsStatus, dispatch, templatesStatus])


    useEffect(() => {
      if(fontsStatus === 'idle') {
          dispatch(fetchFonts())
      }


      axios.get(`${process.env.REACT_APP_GOOGLEAPI_URL}key=${process.env.REACT_APP_GOOGLEAPI_KEY}`, {
          sort: 'alpha',
      })
      .then(res => {
          // console.log('res', res)
          setAllGoogleFonts(res.data.items)
      }).catch(err => {
          console.log('err', err)
      })
  }, [fontsStatus, dispatch])


  const onLoad = () => {
    const body = iframeRef.current?.contentDocument?.body;
    if (body) {
      // Your code to manipulate the body element goes here
      console.log('body', body);
  
      // Get all elements on the page
      const allElements = body.getElementsByTagName("*");
  
      // Filter only the elements that have non-empty text content
      const textElements = Array.from(allElements).filter((el) => {
        return el.innerText.trim().length > 0;
      });
  
      // Create an array to hold the text input elements
      const textInputs = {};
  
      // Loop through the filtered text elements and create a text input element for each one
      textElements.forEach((el) => {
        // Create a new text node with the element's text content
        const textNode = document.createTextNode(el.innerText);
  
        if (textInputs[el.innerText]) {
          // Use the existing text input element
          const input = textInputs[el.innerText];
        } else {
          // Create a new text input element
          const input = document.createElement("input");
          input.type = "text";
          input.value = el.innerText;
          input.className = 'w-[80%]';
  
          // Add the input element to the object
          textInputs[el.innerText] = input;
          // Replace the text node with the input element
          el.parentNode.replaceChild(input, el);
        }
      });
  
      // Append the text input elements to a specific part of the HTML
      const targetElement = document.getElementById("input-div");
      if (targetElement) {
        Object.values(textInputs).forEach((input) => {
          targetElement.appendChild(input);
        });
      } else {
        console.error("Target element not found.");
      }
    }
  };
  
  useEffect(() => {
    runCode();
  
    const iframe = iframeRef.current;
    console.log('iframe', iframe)
    if (iframe) {
      iframe.onload = onLoad;
    }
  }, [html, css, js]);
      
    
    useEffect(() => {
      setId(pushid())
    }, [])
    

    const selectTemplate = (template) => {
      setTemplateSelected(template.id)
      setHtml(template.code.html)
      setCss(template.code.css)
      setJs(template.code.js)
      setTemplateId(null)
    }

   

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

        setDocumentContent(documentContents)
    
        document.open();
        if (documentContent == undefined) {
          document.write(documentContents);
        } 
        document.write(documentContent);
        document.close();
      };

    const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
      };
  
console.log("iframe ref",iframeRef)

      const node = document.getElementById('iframe');
      // const iframe = node.contentWindow.document;
      const find = ReactDOM.findDOMNode(node);

      console.log('find', find)


 


    
  return (
    <>
    <div className="w-full p-[30px] bg-[#f8f3ff] h-full sm:h-[700px] flex flex-col-reverse sm:flex-row ">
        <div className="flex flex-[40] max-w-[100%] sm:max-w-[40%] p-0 sm:p-[20px] flex-col pr-0 sm:pr-[50px]">
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
                        <div className={`h-full w-full `}>
                        {fonts.map((font, index)=>{
                            return (
                              // <div className="h-[120px] w-full rounded-[20px] border-solid border-[2pt]  p-[5px]">
                              <div className={`inline-block h-[120px] ${gridToggle ? "w-full" : "w-[50%]"}  rounded-[20px] drop-shadow-md border-solid border-[2pt] ${fontSelected == font.id ? "border-[#0a9147]" : "border-transparent"} p-[5px]`} key={index}>

                                <button className=" text-black bg-white border-solid border-[2pt] border-transparent hover:border-[#0a9147] h-full w-full rounded-[15px]  text-center text-[10px]" key={index+font.family}>
                                <h1 className='text-[50px]' style={{fontFamily: font.family}}>A</h1>
                                <p className=' text-purple-900'>{font.family}</p>
                                </button>
                              </div>
                            )
                        })} 
                        <div className={`inline-block h-[120px] ${gridToggle ? "w-full" : "w-[50%]"} w-full rounded-[20px] border-solid border-[2pt] border-transparent p-[5px]`}>
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

        <div className="flex flex-col sm:h-full flex-[60] max-w-[100%] mb-[40px] sm:mb-0 sm:max-w-[60%] p-0 sm:p-[20px] pl-0 sm:pl-[50px] border-solid border-l-[0.1pt] border-[#e2e2e2">
            <div className="flex-[75] rounded-[20px] bg-white">

              <section className="result rounded-[20px] h-full">
                <iframe id='iframe' title="result" className="iframe h-[300px] sm:h-full w-full" ref={iframeRef} />
              </section>

            </div>
            <div className="w-full flex-[13] pt-[10px]">
                <div className="w-full h-full flex items-center justify-center relative">
                   <DiscreteSliderMarks/>
                </div>
            </div>
            

            <div className="w-full flex-[12] flex items-center justify-center">
                <div id='input-div' className="h-[50px] w-full flex flex-col items-center justify-center rounded-full bg-transparent">
                   
                </div>
            </div>

            <div className="flex-[25] flex justify-center w-full pt-[30px] pb-[10px] overflow-x-scroll">
                <div className="h-full w-full flex flex-row grid-rows-1 gap-1">
                  {templates.map((template, index)=>{
                    return (
                    // <div className=" h-full w-[140px] rounded-[20px] border-solid border-[3pt] border-[#1dc669] p-[5px] mr-[20px]" key={index}>
                    <div className={` h-full max-w-[140px] min-w-[140px] rounded-[20px] border-solid border-[3pt]  ${templateSelected == template.id || templateId == template.id ? "border-[#0a9147]" : "border-transparent"} p-[5px]`} key={index}
                    onClick={()=>{selectTemplate(template)}}
                    >

                      <div className="h-full w-full rounded-[15px] bg-white drop-shadow-md border-solid border-[2pt] hover:border-[#0a9147] border-transparent cursor-pointer p-[10px] flex justify-center items-center text-center">
                        <h1 className='font-bold text-[15px] text-purple-600'>{template.name}</h1>
                      </div>
                    </div>
                    )
                  })}
                  

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

        {/* <FontSelectModal open={openFontModal} setOpen={setOpenFontModal} fonts={fontsData} fontTray={fonts} setFontTray={setFonts}/>
        <TemplateSelectModal open={openTemplateModal} setOpen={setOpenTemplateModal} templates={templatesData} templateTray={templates} setTemplateTray={setTemplates}/> */}
        <FontAddModal open={openFontModal} setOpen={setOpenFontModal} allGoogleFonts= {allGoogleFonts} fonts={fonts}/>
        <TemplateAddModal open={openTemplateModal} setOpen={setOpenTemplateModal}/>
    </>
    
    
  )
}


