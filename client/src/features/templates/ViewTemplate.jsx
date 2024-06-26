import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTemplateRequest } from './templateSlice'
import { IoIosArrowBack } from "react-icons/io";


export default function ViewTemplate(props) {

  const dispatch = useDispatch()
  const location = useLocation()

  const [template, setTemplate] = useState(location.state)
  const [html, setHtml] = useState(template.code.html)
  const [css, setCss] = useState(template.code.css)
  const [js, setJs] = useState(template.code.js)


  const iframeRef = React.createRef();
  const iframeRef2 = React.createRef();

  useEffect(() => {
    runCode();
  }, [html, css, js]);


  const selectTemplate = (template) => {
    setHtml(template.code.html)
    setCss(template.code.css)
    setJs(template.code.js)
  }

  const runCode = () => {
    // const { html, css, js } = state;

    const iframe = iframeRef.current;
    const iframe2 = iframeRef2.current
    const document = iframe.contentDocument;
    const document2 = iframe2.contentDocument;
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
    document2.open();
    document.write(documentContents);
    document2.write(documentContents);
    document.close();
    document2.close();
  };



  const navigate = useNavigate()

  const deleteTemplate = (id) => {
    try {
      dispatch(deleteTemplateRequest(id))
    } catch (error) {
      console.log('error', error)
    } finally {
      navigate(-1)
    }
  }

  return (
    <div className="w-full h-auto flex flex-col sm:flex-row bg-[#f8f3ff] min-h-[400px]">




      <section className="result z-10 rounded-[20px] m-[10%] sm:m-[5%] h-[350px] w-[80%] sm:w-[45%] bg-black absolute sm:block hidden top-[78%] sm:top-[12%] sm:right-[1%]">
        <iframe id='iframe' title="result" className="iframe h-[300px] sm:h-full w-full" ref={iframeRef} />
      </section>

      <div className=" relative flex-[2] flex flex-col h-full w-full sm:pb-[50px] pb-[60px] sm:pt-[20px] pt-[20px] sm:px-[50px] px-[30px]">
        <div className="flex flex-row justify-between">
          <div className="px-[8px] self-start py-[8px] left-[5%] top-[18%] z-[10] rounded-full bg-transparent border-solid border-[1px] border-black cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className='text-[20px] text-purple-900' />
          </div>


        </div>






        <div className="">
          <h1 className='text-[40px] font-bold'>{template.name}</h1>
          <p className='text-[14px]'>Author: <span className='text-purple-900 pl-[10px]'>{`${template.author}`}</span></p>
          <div className="w-[70%] pt-[20px] pb-[40px]">
            <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt est qui quidem cum, possimus, minus eaque dolor, nostrum quaerat nulla in consequatur. Accusantium ut corrupti porro magni consequatur qui praesentium!</p>
          </div>
        </div>
        <Link to={`/fontlab/${0}`} state={template}>
          <button className='px-[15px] py-[9px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Use Template</button>
        </Link>



      </div>
      <div className="relative flex-[1.5] flex flex-col h-full bg-purple-200">
        <div className="p-[5%] w-full h-[400px]">
          <div className="absolute right-[7%] top-[5%] sm:top-[3%] sm:right-[2%] hover:bg-purple-700 overflow-hidden hover:w-[150px] hover:h-[200px] hover:rounded-[10px] h-[50px] w-[50px] rounded-[10px] duration-150 ease-linear z-10"
          // onClick={()=>{setToggleDropdown(!toggleDropdown)}}
          >
            <div className="absolute right-0 top-0 cursor-pointer h-[50px] w-[50px] flex items-center justify-center">
              <div className="">
                <div className="h-[4px] w-[4.8px] bg-white sm:bg-purple-700 rounded-full my-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-white sm:bg-purple-700 rounded-full mb-[5px]"></div>
                <div className="h-[4px] w-[4.8px] bg-white sm:bg-purple-700 rounded-full mb-[5px]"></div>
              </div>
            </div>
            <div className="relative mt-[50px] w-[150px] px-[15px]">
              <button className="w-full flex justify-center py-[5px] bg-white hover:bg-purple-100 rounded-[5px] mb-[5px] mx-[2px] text-center text-red-700 text-[11px]"
                onClick={() => { deleteTemplate(template.id) }}>Delete Template</button>
            </div>

          </div>
          <section className="result rounded-[20px] h-[350px] w-full bg-black sm:hidden block">
            <iframe id='iframe2' title="result" className="iframe h-[300px] sm:h-full w-full" ref={iframeRef2} />
          </section>
        </div>
        <div className="">
          <div className="w-full py-[30px] px-[30px] sm:px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Made With</h1>
            {template.madeWith.map((tool, index) => {
              return (
                <button className="px-[10px] py-[1px] text-purple-900 bg-white rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] border-black border-solid border-[1px] justify-between items-center" key={index}>{tool.name}</button>
              )
            })}

          </div>

          <div className="w-full pb-[30px] px-[30px] sm:px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Compactible Browsers</h1>
            {template.compactibleBrowsers.map((browser, index) => {
              return (
                <button className="px-[10px] py-[1px] text-purple-900 bg-white rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] border-black border-solid border-[1px] justify-between items-center" key={index}>{browser.name}</button>
              )
            })}

          </div>

        </div>
      </div>
    </div>
  )
}
