import React,{useState, useEffect, useRef} from 'react'
import DiscreteSliderMarks from '../global_components/Slider'
import axios from 'axios'
import { Controlled as CodeMirror } from 'react-codemirror2';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allFonts, fontsStatus, fetchFonts } from '../features/fonts/fontSlice';




import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
// import CodeEditor from './CodeEditor'


export default function FontLab() {

  const dispatch = useDispatch()
const location = useLocation();

    const fonts = useSelector(allFonts)
    const fontsStatus = useSelector(fontsStatus)

    const [allGoogleFonts, setAllGoogleFonts] = useState([])
    const [template, setTemplate] = useState(location.state)
    const [id, setId] = useState('')
    const [html, setHtml] = useState(template.code.html)
    const [css, setCss] = useState(template.code.css)
    const [js, setJs] = useState(template.code.js)
    console.log('template', template)
  

    

    useEffect(() => {

      if(fontsStatus === 'idle') {
        dispatch(fetchFonts())
    }
        // axios.get(`${url}/fonts`)
        // .then((res)=> {
        //     setFonts(res.data)
        // }).catch((err)=>{
        //     console.log('err', err)
        // })


        // axios.get(`${process.env.REACT_APP_GOOGLEAPI_URL}key=${process.env.REACT_APP_GOOGLEAPI_KEY}`, {
        //     sort: 'alpha',
        // })
        // .then(res => {
        //     // console.log('res', res)
        //     setAllGoogleFonts(res.data.items)
        // }).catch(err => {
        //     console.log('err', err)
        // })
    }, [fontsStatus, dispatch])





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
        <div className="flex flex-[3] p-[20px] flex-col pr-[50px]">
            <div className="w-full flex-[62]">
                <div className="w-full h-full bg-white rounded-[20px] flex flex-col">
                    <div className="flex-[60] p-[20px]">
                        <h1 className=' font-bold'>Your Fonts</h1>
                        <div className="h-full w-full overflow-y-scroll border-solid border-t-[0.1pt] border-[#e2e2e2] pt-[10px]">
                        {fonts.map((font, index)=>{
                            return (
                                <button className="px-[10px] py-[1px] text-white bg-purple-900 rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px]" key={index+font.font.family}>{font.font.family}</button>
                            )
                        })}                        
                        </div>
                    </div>
                    <div className="flex-[40] p-[20px]">
                        <h1 className='font-bold'>Selected</h1>
                        <div className="h-full w-full border-solid border-t-[0.1pt] border-[#e2e2e2] pt-[10px]">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex-[12] flex items-center justify-center">
                <div className="h-[50px] w-full flex items-center justify-center rounded-full bg-white">
                    <input type="text" className='w-[80%] outline-none' placeholder='Input Text' />
                </div>
            </div>
        </div>

        <div className="flex flex-col flex-[5] p-[20px] pl-[50px] border-solid border-l-[0.1pt] border-[#e2e2e2">
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
            <div className="flex-[25] pt-[30px]">
                <div className="h-full w-full flex flex-row overflow-x-visible py-[30px]">
                  <div className=" h-full w-[140px] rounded-[20px] border-solid border-[3pt] border-[#1dc669] p-[5px]">
                    <div className="h-full w-full rounded-[15px] bg-purple-500 cursor-pointer p-[10px] flex justify-center items-center text-center">
                      <h1 className='font-bold text-[17px] text-white'>{template.name}</h1>
                    </div>
                  </div>

                  <div className=" h-full w-[140px] rounded-[20px] border-solid border-[3pt] p-[5px] border-transparent ml-[20px]">
                    <div className="h-full w-full rounded-[15px] bg-gray-200 cursor-pointer p-[10px] flex justify-center items-center text-center text-[30px] text-purple-800 font-black ">
                      +
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
    



        <section className="playground  w-full flex flex-row">
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

    </>
    
  )
}
