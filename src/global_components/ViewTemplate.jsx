import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function ViewTemplate(props) {

  const location = useLocation()
  const [templates, setTemplates] = useState(location.state)

    // const params = useParams()




    
  


  return (
    <div className="w-full h-auto flex flex-row bg-[#f8f3ff] min-h-[400px]">
      <section className="result rounded-[20px] m-[5%] h-[350px] w-[45%] bg-black absolute right-[1%]">
          <iframe title="result" className="iframe" 
          // ref={iframeRef}
           />
        </section>
        <div className="flex-[2] h-full w-full p-[50px]">
          <div className="">
            <h1 className='text-[40px] font-bold'>{templates.template.name}</h1>
            <p className='text-[14px]'>Author: <span className='text-purple-900 pl-[10px]'>{`${templates.template.Author}`}</span></p>
            <div className="w-[70%] pt-[20px] pb-[40px]">
              <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt est qui quidem cum, possimus, minus eaque dolor, nostrum quaerat nulla in consequatur. Accusantium ut corrupti porro magni consequatur qui praesentium!</p>
            </div>
          </div>
          <Link to={`/fontlab/${templates.template.id}`} state={templates.template}>
            <button className='px-[15px] py-[9px] bg-purple-900 rounded-[40px] text-[14px] text-center duration-[0.5s] text-white'>Use Template</button>
          </Link>
          
         
         
        </div>
        <div className="flex-[1.5] flex flex-col h-full bg-purple-200">
          <div className="p-[5%] w-full h-[400px]"></div>
          <div className="">
          <div className="w-full py-[30px] px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Made With</h1>
            {templates.template.madeWith.map((tool, index)=>{
              return (
                <button className="px-[10px] py-[1px] text-purple-900 bg-white rounded-[20px] mb-[5px] mx-[2px] text-center text-[10px] border-black border-solid border-[1px] justify-between items-center" key={index}>{tool.name}</button>
              )
            })}

          </div>

          <div className="w-full pb-[30px] px-[50px]">
            <h1 className='pb-[20px] font-bold text-[15px]'>Compactible Browsers</h1>
            {templates.template.compactiibleBrowsers.map((browser, index)=>{
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
